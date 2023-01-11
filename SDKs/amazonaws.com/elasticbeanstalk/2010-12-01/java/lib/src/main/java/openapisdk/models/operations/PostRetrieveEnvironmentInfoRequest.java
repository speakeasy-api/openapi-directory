package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRetrieveEnvironmentInfoRequest {
    public PostRetrieveEnvironmentInfoQueryParams queryParams;
    public PostRetrieveEnvironmentInfoRequest withQueryParams(PostRetrieveEnvironmentInfoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRetrieveEnvironmentInfoHeaders headers;
    public PostRetrieveEnvironmentInfoRequest withHeaders(PostRetrieveEnvironmentInfoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRetrieveEnvironmentInfoRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}