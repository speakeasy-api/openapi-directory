package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLocalGatewayRouteTableVpcAssociationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateLocalGatewayRouteTableVpcAssociationActionEnum action;
    public PostCreateLocalGatewayRouteTableVpcAssociationQueryParams withAction(PostCreateLocalGatewayRouteTableVpcAssociationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateLocalGatewayRouteTableVpcAssociationVersionEnum version;
    public PostCreateLocalGatewayRouteTableVpcAssociationQueryParams withVersion(PostCreateLocalGatewayRouteTableVpcAssociationVersionEnum version) {
        this.version = version;
        return this;
    }
}