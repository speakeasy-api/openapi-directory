package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostChangePasswordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostChangePasswordActionEnum action;
    public PostChangePasswordQueryParams withAction(PostChangePasswordActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostChangePasswordVersionEnum version;
    public PostChangePasswordQueryParams withVersion(PostChangePasswordVersionEnum version) {
        this.version = version;
        return this;
    }
}