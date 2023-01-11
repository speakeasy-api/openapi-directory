package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddRoleToInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAddRoleToInstanceProfileActionEnum action;
    public PostAddRoleToInstanceProfileQueryParams withAction(PostAddRoleToInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAddRoleToInstanceProfileVersionEnum version;
    public PostAddRoleToInstanceProfileQueryParams withVersion(PostAddRoleToInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}