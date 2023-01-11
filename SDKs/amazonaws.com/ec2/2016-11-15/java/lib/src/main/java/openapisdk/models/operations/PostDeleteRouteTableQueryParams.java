package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRouteTableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteRouteTableActionEnum action;
    public PostDeleteRouteTableQueryParams withAction(PostDeleteRouteTableActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteRouteTableVersionEnum version;
    public PostDeleteRouteTableQueryParams withVersion(PostDeleteRouteTableVersionEnum version) {
        this.version = version;
        return this;
    }
}