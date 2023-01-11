package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyEndpointAccessRequest {
    public PostModifyEndpointAccessQueryParams queryParams;
    public PostModifyEndpointAccessRequest withQueryParams(PostModifyEndpointAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyEndpointAccessHeaders headers;
    public PostModifyEndpointAccessRequest withHeaders(PostModifyEndpointAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyEndpointAccessRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}