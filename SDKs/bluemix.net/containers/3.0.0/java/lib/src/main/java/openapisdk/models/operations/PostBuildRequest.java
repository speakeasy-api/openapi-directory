package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBuildRequest {
    public PostBuildQueryParams queryParams;
    public PostBuildRequest withQueryParams(PostBuildQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostBuildHeaders headers;
    public PostBuildRequest withHeaders(PostBuildHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/tar")
    public byte[] request;
    public PostBuildRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}