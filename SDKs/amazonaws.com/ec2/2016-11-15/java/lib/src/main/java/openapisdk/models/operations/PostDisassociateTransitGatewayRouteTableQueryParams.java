package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateTransitGatewayRouteTableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateTransitGatewayRouteTableActionEnum action;
    public PostDisassociateTransitGatewayRouteTableQueryParams withAction(PostDisassociateTransitGatewayRouteTableActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateTransitGatewayRouteTableVersionEnum version;
    public PostDisassociateTransitGatewayRouteTableQueryParams withVersion(PostDisassociateTransitGatewayRouteTableVersionEnum version) {
        this.version = version;
        return this;
    }
}