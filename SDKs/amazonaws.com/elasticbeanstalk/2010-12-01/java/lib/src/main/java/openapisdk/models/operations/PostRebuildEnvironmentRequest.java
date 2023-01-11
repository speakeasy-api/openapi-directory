package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRebuildEnvironmentRequest {
    public PostRebuildEnvironmentQueryParams queryParams;
    public PostRebuildEnvironmentRequest withQueryParams(PostRebuildEnvironmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRebuildEnvironmentHeaders headers;
    public PostRebuildEnvironmentRequest withHeaders(PostRebuildEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRebuildEnvironmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}