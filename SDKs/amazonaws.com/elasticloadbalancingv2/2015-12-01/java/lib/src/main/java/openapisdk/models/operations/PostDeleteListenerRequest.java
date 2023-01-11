package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteListenerRequest {
    public PostDeleteListenerQueryParams queryParams;
    public PostDeleteListenerRequest withQueryParams(PostDeleteListenerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteListenerHeaders headers;
    public PostDeleteListenerRequest withHeaders(PostDeleteListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteListenerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}