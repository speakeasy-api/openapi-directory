package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteInternetGatewayRequest {
    public PostDeleteInternetGatewayQueryParams queryParams;
    public PostDeleteInternetGatewayRequest withQueryParams(PostDeleteInternetGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteInternetGatewayHeaders headers;
    public PostDeleteInternetGatewayRequest withHeaders(PostDeleteInternetGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteInternetGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}