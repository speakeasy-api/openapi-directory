package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchTransitGatewayRoutesRequest {
    public PostSearchTransitGatewayRoutesQueryParams queryParams;
    public PostSearchTransitGatewayRoutesRequest withQueryParams(PostSearchTransitGatewayRoutesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSearchTransitGatewayRoutesHeaders headers;
    public PostSearchTransitGatewayRoutesRequest withHeaders(PostSearchTransitGatewayRoutesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSearchTransitGatewayRoutesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}