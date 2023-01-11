package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTerminateEnvironmentRequest {
    public PostTerminateEnvironmentQueryParams queryParams;
    public PostTerminateEnvironmentRequest withQueryParams(PostTerminateEnvironmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTerminateEnvironmentHeaders headers;
    public PostTerminateEnvironmentRequest withHeaders(PostTerminateEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTerminateEnvironmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}