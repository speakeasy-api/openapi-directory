package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConfigureHealthCheckRequest {
    public PostConfigureHealthCheckQueryParams queryParams;
    public PostConfigureHealthCheckRequest withQueryParams(PostConfigureHealthCheckQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostConfigureHealthCheckHeaders headers;
    public PostConfigureHealthCheckRequest withHeaders(PostConfigureHealthCheckHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostConfigureHealthCheckRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}