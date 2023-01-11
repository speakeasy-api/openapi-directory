package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachInternetGatewayRequest {
    public PostDetachInternetGatewayQueryParams queryParams;
    public PostDetachInternetGatewayRequest withQueryParams(PostDetachInternetGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDetachInternetGatewayHeaders headers;
    public PostDetachInternetGatewayRequest withHeaders(PostDetachInternetGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDetachInternetGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}