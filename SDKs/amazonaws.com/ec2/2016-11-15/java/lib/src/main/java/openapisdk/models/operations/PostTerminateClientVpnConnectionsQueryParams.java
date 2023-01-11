package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTerminateClientVpnConnectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTerminateClientVpnConnectionsActionEnum action;
    public PostTerminateClientVpnConnectionsQueryParams withAction(PostTerminateClientVpnConnectionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTerminateClientVpnConnectionsVersionEnum version;
    public PostTerminateClientVpnConnectionsQueryParams withVersion(PostTerminateClientVpnConnectionsVersionEnum version) {
        this.version = version;
        return this;
    }
}