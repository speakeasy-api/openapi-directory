package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetRoleActionEnum action;
    public PostGetRoleQueryParams withAction(PostGetRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetRoleVersionEnum version;
    public PostGetRoleQueryParams withVersion(PostGetRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}