package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteServiceLinkedRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteServiceLinkedRoleActionEnum action;
    public PostDeleteServiceLinkedRoleQueryParams withAction(PostDeleteServiceLinkedRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteServiceLinkedRoleVersionEnum version;
    public PostDeleteServiceLinkedRoleQueryParams withVersion(PostDeleteServiceLinkedRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}