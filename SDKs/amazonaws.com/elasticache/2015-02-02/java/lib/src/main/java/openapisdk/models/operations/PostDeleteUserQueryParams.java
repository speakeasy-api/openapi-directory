package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteUserActionEnum action;
    public PostDeleteUserQueryParams withAction(PostDeleteUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteUserVersionEnum version;
    public PostDeleteUserQueryParams withVersion(PostDeleteUserVersionEnum version) {
        this.version = version;
        return this;
    }
}