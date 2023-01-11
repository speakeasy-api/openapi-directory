package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateRoleActionEnum action;
    public PostUpdateRoleQueryParams withAction(PostUpdateRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateRoleVersionEnum version;
    public PostUpdateRoleQueryParams withVersion(PostUpdateRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}