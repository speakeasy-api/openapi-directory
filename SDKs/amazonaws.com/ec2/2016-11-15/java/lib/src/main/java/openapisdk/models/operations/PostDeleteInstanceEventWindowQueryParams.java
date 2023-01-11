package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteInstanceEventWindowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteInstanceEventWindowActionEnum action;
    public PostDeleteInstanceEventWindowQueryParams withAction(PostDeleteInstanceEventWindowActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteInstanceEventWindowVersionEnum version;
    public PostDeleteInstanceEventWindowQueryParams withVersion(PostDeleteInstanceEventWindowVersionEnum version) {
        this.version = version;
        return this;
    }
}