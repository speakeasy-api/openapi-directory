package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayConnectPeerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTransitGatewayConnectPeerActionEnum action;
    public PostDeleteTransitGatewayConnectPeerQueryParams withAction(PostDeleteTransitGatewayConnectPeerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTransitGatewayConnectPeerVersionEnum version;
    public PostDeleteTransitGatewayConnectPeerQueryParams withVersion(PostDeleteTransitGatewayConnectPeerVersionEnum version) {
        this.version = version;
        return this;
    }
}