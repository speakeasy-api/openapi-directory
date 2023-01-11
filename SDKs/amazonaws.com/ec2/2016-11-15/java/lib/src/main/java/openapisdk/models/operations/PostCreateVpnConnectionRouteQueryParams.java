package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpnConnectionRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateVpnConnectionRouteActionEnum action;
    public PostCreateVpnConnectionRouteQueryParams withAction(PostCreateVpnConnectionRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateVpnConnectionRouteVersionEnum version;
    public PostCreateVpnConnectionRouteQueryParams withVersion(PostCreateVpnConnectionRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}