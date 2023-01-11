package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayConnectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTransitGatewayConnectActionEnum action;
    public PostDeleteTransitGatewayConnectQueryParams withAction(PostDeleteTransitGatewayConnectActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTransitGatewayConnectVersionEnum version;
    public PostDeleteTransitGatewayConnectQueryParams withVersion(PostDeleteTransitGatewayConnectVersionEnum version) {
        this.version = version;
        return this;
    }
}