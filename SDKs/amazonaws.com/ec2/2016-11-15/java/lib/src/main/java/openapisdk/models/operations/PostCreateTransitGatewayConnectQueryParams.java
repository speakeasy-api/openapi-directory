package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayConnectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTransitGatewayConnectActionEnum action;
    public PostCreateTransitGatewayConnectQueryParams withAction(PostCreateTransitGatewayConnectActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTransitGatewayConnectVersionEnum version;
    public PostCreateTransitGatewayConnectQueryParams withVersion(PostCreateTransitGatewayConnectVersionEnum version) {
        this.version = version;
        return this;
    }
}