package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClientVpnRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateClientVpnRouteActionEnum action;
    public PostCreateClientVpnRouteQueryParams withAction(PostCreateClientVpnRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateClientVpnRouteVersionEnum version;
    public PostCreateClientVpnRouteQueryParams withVersion(PostCreateClientVpnRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}