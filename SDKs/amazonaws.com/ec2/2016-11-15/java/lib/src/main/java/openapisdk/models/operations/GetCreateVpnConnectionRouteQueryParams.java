package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateVpnConnectionRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateVpnConnectionRouteActionEnum action;
    public GetCreateVpnConnectionRouteQueryParams withAction(GetCreateVpnConnectionRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetCreateVpnConnectionRouteQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateVpnConnectionRouteVersionEnum version;
    public GetCreateVpnConnectionRouteQueryParams withVersion(GetCreateVpnConnectionRouteVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpnConnectionId")
    public String vpnConnectionId;
    public GetCreateVpnConnectionRouteQueryParams withVpnConnectionId(String vpnConnectionId) {
        this.vpnConnectionId = vpnConnectionId;
        return this;
    }
}