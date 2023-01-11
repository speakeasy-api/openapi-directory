package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRolePermissionsBoundaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteRolePermissionsBoundaryActionEnum action;
    public PostDeleteRolePermissionsBoundaryQueryParams withAction(PostDeleteRolePermissionsBoundaryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteRolePermissionsBoundaryVersionEnum version;
    public PostDeleteRolePermissionsBoundaryQueryParams withVersion(PostDeleteRolePermissionsBoundaryVersionEnum version) {
        this.version = version;
        return this;
    }
}