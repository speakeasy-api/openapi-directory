package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteRoleActionEnum action;
    public PostDeleteRoleQueryParams withAction(PostDeleteRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteRoleVersionEnum version;
    public PostDeleteRoleQueryParams withVersion(PostDeleteRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}