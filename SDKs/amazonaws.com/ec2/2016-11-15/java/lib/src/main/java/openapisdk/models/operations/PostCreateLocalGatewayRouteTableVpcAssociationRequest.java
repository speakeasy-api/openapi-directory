package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLocalGatewayRouteTableVpcAssociationRequest {
    public PostCreateLocalGatewayRouteTableVpcAssociationQueryParams queryParams;
    public PostCreateLocalGatewayRouteTableVpcAssociationRequest withQueryParams(PostCreateLocalGatewayRouteTableVpcAssociationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateLocalGatewayRouteTableVpcAssociationHeaders headers;
    public PostCreateLocalGatewayRouteTableVpcAssociationRequest withHeaders(PostCreateLocalGatewayRouteTableVpcAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateLocalGatewayRouteTableVpcAssociationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}