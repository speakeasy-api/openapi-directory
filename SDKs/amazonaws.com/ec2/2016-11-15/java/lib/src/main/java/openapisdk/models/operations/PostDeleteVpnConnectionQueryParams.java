package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpnConnectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteVpnConnectionActionEnum action;
    public PostDeleteVpnConnectionQueryParams withAction(PostDeleteVpnConnectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteVpnConnectionVersionEnum version;
    public PostDeleteVpnConnectionQueryParams withVersion(PostDeleteVpnConnectionVersionEnum version) {
        this.version = version;
        return this;
    }
}