package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLocalGatewayRouteTableVpcAssociationRequest {
    public PostDeleteLocalGatewayRouteTableVpcAssociationQueryParams queryParams;
    public PostDeleteLocalGatewayRouteTableVpcAssociationRequest withQueryParams(PostDeleteLocalGatewayRouteTableVpcAssociationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteLocalGatewayRouteTableVpcAssociationHeaders headers;
    public PostDeleteLocalGatewayRouteTableVpcAssociationRequest withHeaders(PostDeleteLocalGatewayRouteTableVpcAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteLocalGatewayRouteTableVpcAssociationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}