package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpnConnectionOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVpnConnectionOptionsActionEnum action;
    public PostModifyVpnConnectionOptionsQueryParams withAction(PostModifyVpnConnectionOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVpnConnectionOptionsVersionEnum version;
    public PostModifyVpnConnectionOptionsQueryParams withVersion(PostModifyVpnConnectionOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}