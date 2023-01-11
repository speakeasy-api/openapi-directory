package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClientVpnRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteClientVpnRouteActionEnum action;
    public PostDeleteClientVpnRouteQueryParams withAction(PostDeleteClientVpnRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteClientVpnRouteVersionEnum version;
    public PostDeleteClientVpnRouteQueryParams withVersion(PostDeleteClientVpnRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}