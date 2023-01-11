package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteEndpointAccessRequest {
    public PostDeleteEndpointAccessQueryParams queryParams;
    public PostDeleteEndpointAccessRequest withQueryParams(PostDeleteEndpointAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteEndpointAccessHeaders headers;
    public PostDeleteEndpointAccessRequest withHeaders(PostDeleteEndpointAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteEndpointAccessRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}