package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpnConnectionRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteVpnConnectionRouteActionEnum action;
    public PostDeleteVpnConnectionRouteQueryParams withAction(PostDeleteVpnConnectionRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteVpnConnectionRouteVersionEnum version;
    public PostDeleteVpnConnectionRouteQueryParams withVersion(PostDeleteVpnConnectionRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}