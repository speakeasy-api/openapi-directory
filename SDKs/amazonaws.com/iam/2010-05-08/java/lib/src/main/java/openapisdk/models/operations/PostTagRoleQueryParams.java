package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTagRoleActionEnum action;
    public PostTagRoleQueryParams withAction(PostTagRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTagRoleVersionEnum version;
    public PostTagRoleQueryParams withVersion(PostTagRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}