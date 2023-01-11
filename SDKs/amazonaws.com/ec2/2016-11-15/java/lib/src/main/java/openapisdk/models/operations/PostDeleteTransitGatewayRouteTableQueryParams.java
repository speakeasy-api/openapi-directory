package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayRouteTableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTransitGatewayRouteTableActionEnum action;
    public PostDeleteTransitGatewayRouteTableQueryParams withAction(PostDeleteTransitGatewayRouteTableActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTransitGatewayRouteTableVersionEnum version;
    public PostDeleteTransitGatewayRouteTableQueryParams withVersion(PostDeleteTransitGatewayRouteTableVersionEnum version) {
        this.version = version;
        return this;
    }
}