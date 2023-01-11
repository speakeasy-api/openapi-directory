package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUntagRoleActionEnum action;
    public PostUntagRoleQueryParams withAction(PostUntagRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUntagRoleVersionEnum version;
    public PostUntagRoleQueryParams withVersion(PostUntagRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}