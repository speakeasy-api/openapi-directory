package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeEndpointAccessRequest {
    public PostAuthorizeEndpointAccessQueryParams queryParams;
    public PostAuthorizeEndpointAccessRequest withQueryParams(PostAuthorizeEndpointAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAuthorizeEndpointAccessHeaders headers;
    public PostAuthorizeEndpointAccessRequest withHeaders(PostAuthorizeEndpointAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAuthorizeEndpointAccessRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}