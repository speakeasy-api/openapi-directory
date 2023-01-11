package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateEndpointAccessRequest {
    public PostCreateEndpointAccessQueryParams queryParams;
    public PostCreateEndpointAccessRequest withQueryParams(PostCreateEndpointAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateEndpointAccessHeaders headers;
    public PostCreateEndpointAccessRequest withHeaders(PostCreateEndpointAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateEndpointAccessRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}