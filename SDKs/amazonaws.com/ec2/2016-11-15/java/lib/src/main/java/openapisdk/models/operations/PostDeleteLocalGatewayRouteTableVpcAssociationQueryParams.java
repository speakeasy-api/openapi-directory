package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLocalGatewayRouteTableVpcAssociationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteLocalGatewayRouteTableVpcAssociationActionEnum action;
    public PostDeleteLocalGatewayRouteTableVpcAssociationQueryParams withAction(PostDeleteLocalGatewayRouteTableVpcAssociationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteLocalGatewayRouteTableVpcAssociationVersionEnum version;
    public PostDeleteLocalGatewayRouteTableVpcAssociationQueryParams withVersion(PostDeleteLocalGatewayRouteTableVpcAssociationVersionEnum version) {
        this.version = version;
        return this;
    }
}