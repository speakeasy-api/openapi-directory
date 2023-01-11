package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateRoleActionEnum action;
    public PostCreateRoleQueryParams withAction(PostCreateRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateRoleVersionEnum version;
    public PostCreateRoleQueryParams withVersion(PostCreateRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}