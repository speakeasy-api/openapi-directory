package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLocalGatewayRouteRequest {
    public PostCreateLocalGatewayRouteQueryParams queryParams;
    public PostCreateLocalGatewayRouteRequest withQueryParams(PostCreateLocalGatewayRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateLocalGatewayRouteHeaders headers;
    public PostCreateLocalGatewayRouteRequest withHeaders(PostCreateLocalGatewayRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateLocalGatewayRouteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}