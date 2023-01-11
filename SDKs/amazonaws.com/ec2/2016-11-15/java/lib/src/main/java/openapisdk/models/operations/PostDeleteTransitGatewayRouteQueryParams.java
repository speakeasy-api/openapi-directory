package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTransitGatewayRouteActionEnum action;
    public PostDeleteTransitGatewayRouteQueryParams withAction(PostDeleteTransitGatewayRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTransitGatewayRouteVersionEnum version;
    public PostDeleteTransitGatewayRouteQueryParams withVersion(PostDeleteTransitGatewayRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}