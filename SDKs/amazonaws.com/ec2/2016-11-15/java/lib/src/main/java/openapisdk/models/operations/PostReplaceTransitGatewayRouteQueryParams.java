package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReplaceTransitGatewayRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostReplaceTransitGatewayRouteActionEnum action;
    public PostReplaceTransitGatewayRouteQueryParams withAction(PostReplaceTransitGatewayRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostReplaceTransitGatewayRouteVersionEnum version;
    public PostReplaceTransitGatewayRouteQueryParams withVersion(PostReplaceTransitGatewayRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}