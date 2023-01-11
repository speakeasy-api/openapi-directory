package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateRouteActionEnum action;
    public PostCreateRouteQueryParams withAction(PostCreateRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateRouteVersionEnum version;
    public PostCreateRouteQueryParams withVersion(PostCreateRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}