package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeEndpointAccessRequest {
    public PostRevokeEndpointAccessQueryParams queryParams;
    public PostRevokeEndpointAccessRequest withQueryParams(PostRevokeEndpointAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRevokeEndpointAccessHeaders headers;
    public PostRevokeEndpointAccessRequest withHeaders(PostRevokeEndpointAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRevokeEndpointAccessRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}