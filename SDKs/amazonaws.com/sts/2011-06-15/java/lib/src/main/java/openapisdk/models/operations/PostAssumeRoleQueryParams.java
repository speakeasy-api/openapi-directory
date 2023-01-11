package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssumeRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssumeRoleActionEnum action;
    public PostAssumeRoleQueryParams withAction(PostAssumeRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssumeRoleVersionEnum version;
    public PostAssumeRoleQueryParams withVersion(PostAssumeRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}