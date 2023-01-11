package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteTransitGatewayConnectPeerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteTransitGatewayConnectPeerActionEnum action;
    public GetDeleteTransitGatewayConnectPeerQueryParams withAction(GetDeleteTransitGatewayConnectPeerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteTransitGatewayConnectPeerQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayConnectPeerId")
    public String transitGatewayConnectPeerId;
    public GetDeleteTransitGatewayConnectPeerQueryParams withTransitGatewayConnectPeerId(String transitGatewayConnectPeerId) {
        this.transitGatewayConnectPeerId = transitGatewayConnectPeerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteTransitGatewayConnectPeerVersionEnum version;
    public GetDeleteTransitGatewayConnectPeerQueryParams withVersion(GetDeleteTransitGatewayConnectPeerVersionEnum version) {
        this.version = version;
        return this;
    }
}