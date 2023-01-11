package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateUserActionEnum action;
    public PostCreateUserQueryParams withAction(PostCreateUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateUserVersionEnum version;
    public PostCreateUserQueryParams withVersion(PostCreateUserVersionEnum version) {
        this.version = version;
        return this;
    }
}