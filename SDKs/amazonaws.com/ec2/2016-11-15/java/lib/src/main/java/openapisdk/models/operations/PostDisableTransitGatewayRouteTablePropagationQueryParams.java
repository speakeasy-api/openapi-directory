package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableTransitGatewayRouteTablePropagationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableTransitGatewayRouteTablePropagationActionEnum action;
    public PostDisableTransitGatewayRouteTablePropagationQueryParams withAction(PostDisableTransitGatewayRouteTablePropagationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableTransitGatewayRouteTablePropagationVersionEnum version;
    public PostDisableTransitGatewayRouteTablePropagationQueryParams withVersion(PostDisableTransitGatewayRouteTablePropagationVersionEnum version) {
        this.version = version;
        return this;
    }
}