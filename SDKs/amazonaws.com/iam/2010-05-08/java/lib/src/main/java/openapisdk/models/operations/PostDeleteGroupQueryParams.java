package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteGroupActionEnum action;
    public PostDeleteGroupQueryParams withAction(PostDeleteGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteGroupVersionEnum version;
    public PostDeleteGroupQueryParams withVersion(PostDeleteGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}