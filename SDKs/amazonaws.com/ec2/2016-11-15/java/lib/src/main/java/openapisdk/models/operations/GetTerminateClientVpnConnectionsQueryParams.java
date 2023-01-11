package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTerminateClientVpnConnectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetTerminateClientVpnConnectionsActionEnum action;
    public GetTerminateClientVpnConnectionsQueryParams withAction(GetTerminateClientVpnConnectionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientVpnEndpointId")
    public String clientVpnEndpointId;
    public GetTerminateClientVpnConnectionsQueryParams withClientVpnEndpointId(String clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConnectionId")
    public String connectionId;
    public GetTerminateClientVpnConnectionsQueryParams withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetTerminateClientVpnConnectionsQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Username")
    public String username;
    public GetTerminateClientVpnConnectionsQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetTerminateClientVpnConnectionsVersionEnum version;
    public GetTerminateClientVpnConnectionsQueryParams withVersion(GetTerminateClientVpnConnectionsVersionEnum version) {
        this.version = version;
        return this;
    }
}