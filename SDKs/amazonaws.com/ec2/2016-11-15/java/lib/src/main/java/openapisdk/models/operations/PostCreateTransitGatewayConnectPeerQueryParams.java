package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayConnectPeerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTransitGatewayConnectPeerActionEnum action;
    public PostCreateTransitGatewayConnectPeerQueryParams withAction(PostCreateTransitGatewayConnectPeerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTransitGatewayConnectPeerVersionEnum version;
    public PostCreateTransitGatewayConnectPeerQueryParams withVersion(PostCreateTransitGatewayConnectPeerVersionEnum version) {
        this.version = version;
        return this;
    }
}