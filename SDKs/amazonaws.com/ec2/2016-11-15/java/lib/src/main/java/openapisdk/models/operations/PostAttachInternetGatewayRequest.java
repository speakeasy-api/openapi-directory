package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachInternetGatewayRequest {
    public PostAttachInternetGatewayQueryParams queryParams;
    public PostAttachInternetGatewayRequest withQueryParams(PostAttachInternetGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachInternetGatewayHeaders headers;
    public PostAttachInternetGatewayRequest withHeaders(PostAttachInternetGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAttachInternetGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}