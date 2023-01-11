package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpnTunnelOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVpnTunnelOptionsActionEnum action;
    public PostModifyVpnTunnelOptionsQueryParams withAction(PostModifyVpnTunnelOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVpnTunnelOptionsVersionEnum version;
    public PostModifyVpnTunnelOptionsQueryParams withVersion(PostModifyVpnTunnelOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}