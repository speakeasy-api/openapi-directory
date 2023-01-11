package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTransitGatewayActionEnum action;
    public PostDeleteTransitGatewayQueryParams withAction(PostDeleteTransitGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTransitGatewayVersionEnum version;
    public PostDeleteTransitGatewayQueryParams withVersion(PostDeleteTransitGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}