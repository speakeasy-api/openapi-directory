package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLocalGatewayRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateLocalGatewayRouteActionEnum action;
    public PostCreateLocalGatewayRouteQueryParams withAction(PostCreateLocalGatewayRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateLocalGatewayRouteVersionEnum version;
    public PostCreateLocalGatewayRouteQueryParams withVersion(PostCreateLocalGatewayRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}