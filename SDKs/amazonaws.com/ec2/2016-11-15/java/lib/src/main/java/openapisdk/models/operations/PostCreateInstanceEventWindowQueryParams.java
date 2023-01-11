package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateInstanceEventWindowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateInstanceEventWindowActionEnum action;
    public PostCreateInstanceEventWindowQueryParams withAction(PostCreateInstanceEventWindowActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateInstanceEventWindowVersionEnum version;
    public PostCreateInstanceEventWindowQueryParams withVersion(PostCreateInstanceEventWindowVersionEnum version) {
        this.version = version;
        return this;
    }
}