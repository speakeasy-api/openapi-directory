package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateRouteTableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateRouteTableActionEnum action;
    public PostCreateRouteTableQueryParams withAction(PostCreateRouteTableActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateRouteTableVersionEnum version;
    public PostCreateRouteTableQueryParams withVersion(PostCreateRouteTableVersionEnum version) {
        this.version = version;
        return this;
    }
}