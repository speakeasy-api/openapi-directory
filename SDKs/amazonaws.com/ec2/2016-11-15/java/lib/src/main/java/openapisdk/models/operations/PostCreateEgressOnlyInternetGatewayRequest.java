package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateEgressOnlyInternetGatewayRequest {
    public PostCreateEgressOnlyInternetGatewayQueryParams queryParams;
    public PostCreateEgressOnlyInternetGatewayRequest withQueryParams(PostCreateEgressOnlyInternetGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateEgressOnlyInternetGatewayHeaders headers;
    public PostCreateEgressOnlyInternetGatewayRequest withHeaders(PostCreateEgressOnlyInternetGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateEgressOnlyInternetGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}