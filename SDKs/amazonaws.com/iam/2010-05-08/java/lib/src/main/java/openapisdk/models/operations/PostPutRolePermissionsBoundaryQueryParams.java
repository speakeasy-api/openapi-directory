package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutRolePermissionsBoundaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutRolePermissionsBoundaryActionEnum action;
    public PostPutRolePermissionsBoundaryQueryParams withAction(PostPutRolePermissionsBoundaryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutRolePermissionsBoundaryVersionEnum version;
    public PostPutRolePermissionsBoundaryQueryParams withVersion(PostPutRolePermissionsBoundaryVersionEnum version) {
        this.version = version;
        return this;
    }
}