package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteVpnConnectionRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteVpnConnectionRouteActionEnum action;
    public GetDeleteVpnConnectionRouteQueryParams withAction(GetDeleteVpnConnectionRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetDeleteVpnConnectionRouteQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteVpnConnectionRouteVersionEnum version;
    public GetDeleteVpnConnectionRouteQueryParams withVersion(GetDeleteVpnConnectionRouteVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpnConnectionId")
    public String vpnConnectionId;
    public GetDeleteVpnConnectionRouteQueryParams withVpnConnectionId(String vpnConnectionId) {
        this.vpnConnectionId = vpnConnectionId;
        return this;
    }
}