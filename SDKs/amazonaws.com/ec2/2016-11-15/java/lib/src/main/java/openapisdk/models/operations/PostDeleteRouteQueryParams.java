package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteRouteActionEnum action;
    public PostDeleteRouteQueryParams withAction(PostDeleteRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteRouteVersionEnum version;
    public PostDeleteRouteQueryParams withVersion(PostDeleteRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}