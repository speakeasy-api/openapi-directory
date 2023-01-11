package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateGroupActionEnum action;
    public PostCreateGroupQueryParams withAction(PostCreateGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateGroupVersionEnum version;
    public PostCreateGroupQueryParams withVersion(PostCreateGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}