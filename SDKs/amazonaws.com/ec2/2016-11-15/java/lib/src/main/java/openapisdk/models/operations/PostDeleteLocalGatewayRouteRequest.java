package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLocalGatewayRouteRequest {
    public PostDeleteLocalGatewayRouteQueryParams queryParams;
    public PostDeleteLocalGatewayRouteRequest withQueryParams(PostDeleteLocalGatewayRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteLocalGatewayRouteHeaders headers;
    public PostDeleteLocalGatewayRouteRequest withHeaders(PostDeleteLocalGatewayRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteLocalGatewayRouteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}