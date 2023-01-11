package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetLoginProfileRequest {
    public PostGetLoginProfileQueryParams queryParams;
    public PostGetLoginProfileRequest withQueryParams(PostGetLoginProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetLoginProfileHeaders headers;
    public PostGetLoginProfileRequest withHeaders(PostGetLoginProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetLoginProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}