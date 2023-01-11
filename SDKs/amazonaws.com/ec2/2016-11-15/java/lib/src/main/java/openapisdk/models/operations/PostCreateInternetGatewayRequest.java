package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateInternetGatewayRequest {
    public PostCreateInternetGatewayQueryParams queryParams;
    public PostCreateInternetGatewayRequest withQueryParams(PostCreateInternetGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateInternetGatewayHeaders headers;
    public PostCreateInternetGatewayRequest withHeaders(PostCreateInternetGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateInternetGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}