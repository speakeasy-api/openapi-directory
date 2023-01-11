package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpnConnectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVpnConnectionActionEnum action;
    public PostModifyVpnConnectionQueryParams withAction(PostModifyVpnConnectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVpnConnectionVersionEnum version;
    public PostModifyVpnConnectionQueryParams withVersion(PostModifyVpnConnectionVersionEnum version) {
        this.version = version;
        return this;
    }
}