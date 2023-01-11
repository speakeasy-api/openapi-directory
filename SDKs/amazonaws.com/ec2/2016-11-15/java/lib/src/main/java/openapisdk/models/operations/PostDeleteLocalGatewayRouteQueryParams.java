package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLocalGatewayRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteLocalGatewayRouteActionEnum action;
    public PostDeleteLocalGatewayRouteQueryParams withAction(PostDeleteLocalGatewayRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteLocalGatewayRouteVersionEnum version;
    public PostDeleteLocalGatewayRouteQueryParams withVersion(PostDeleteLocalGatewayRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}