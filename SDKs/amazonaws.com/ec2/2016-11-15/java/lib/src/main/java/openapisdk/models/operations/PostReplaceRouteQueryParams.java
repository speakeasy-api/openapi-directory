package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReplaceRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostReplaceRouteActionEnum action;
    public PostReplaceRouteQueryParams withAction(PostReplaceRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostReplaceRouteVersionEnum version;
    public PostReplaceRouteQueryParams withVersion(PostReplaceRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}