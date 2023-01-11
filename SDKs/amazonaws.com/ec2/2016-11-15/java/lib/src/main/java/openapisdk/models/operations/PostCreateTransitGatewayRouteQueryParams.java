package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTransitGatewayRouteActionEnum action;
    public PostCreateTransitGatewayRouteQueryParams withAction(PostCreateTransitGatewayRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTransitGatewayRouteVersionEnum version;
    public PostCreateTransitGatewayRouteQueryParams withVersion(PostCreateTransitGatewayRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}