package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateTransitGatewayRouteTableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateTransitGatewayRouteTableActionEnum action;
    public PostAssociateTransitGatewayRouteTableQueryParams withAction(PostAssociateTransitGatewayRouteTableActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateTransitGatewayRouteTableVersionEnum version;
    public PostAssociateTransitGatewayRouteTableQueryParams withVersion(PostAssociateTransitGatewayRouteTableVersionEnum version) {
        this.version = version;
        return this;
    }
}