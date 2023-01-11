package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateGroupActionEnum action;
    public PostUpdateGroupQueryParams withAction(PostUpdateGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateGroupVersionEnum version;
    public PostUpdateGroupQueryParams withVersion(PostUpdateGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}