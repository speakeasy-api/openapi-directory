package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateServiceLinkedRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateServiceLinkedRoleActionEnum action;
    public PostCreateServiceLinkedRoleQueryParams withAction(PostCreateServiceLinkedRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateServiceLinkedRoleVersionEnum version;
    public PostCreateServiceLinkedRoleQueryParams withVersion(PostCreateServiceLinkedRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}