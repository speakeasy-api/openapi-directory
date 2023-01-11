package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayRouteTableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTransitGatewayRouteTableActionEnum action;
    public PostCreateTransitGatewayRouteTableQueryParams withAction(PostCreateTransitGatewayRouteTableActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTransitGatewayRouteTableVersionEnum version;
    public PostCreateTransitGatewayRouteTableQueryParams withVersion(PostCreateTransitGatewayRouteTableVersionEnum version) {
        this.version = version;
        return this;
    }
}