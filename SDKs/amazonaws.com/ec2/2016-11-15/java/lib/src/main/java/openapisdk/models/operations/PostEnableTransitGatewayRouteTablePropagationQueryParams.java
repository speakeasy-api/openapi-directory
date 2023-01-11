package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableTransitGatewayRouteTablePropagationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableTransitGatewayRouteTablePropagationActionEnum action;
    public PostEnableTransitGatewayRouteTablePropagationQueryParams withAction(PostEnableTransitGatewayRouteTablePropagationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableTransitGatewayRouteTablePropagationVersionEnum version;
    public PostEnableTransitGatewayRouteTablePropagationQueryParams withVersion(PostEnableTransitGatewayRouteTablePropagationVersionEnum version) {
        this.version = version;
        return this;
    }
}