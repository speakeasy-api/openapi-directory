package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpnConnectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateVpnConnectionActionEnum action;
    public PostCreateVpnConnectionQueryParams withAction(PostCreateVpnConnectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateVpnConnectionVersionEnum version;
    public PostCreateVpnConnectionQueryParams withVersion(PostCreateVpnConnectionVersionEnum version) {
        this.version = version;
        return this;
    }
}