package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPutRolePermissionsBoundaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPutRolePermissionsBoundaryActionEnum action;
    public GetPutRolePermissionsBoundaryQueryParams withAction(GetPutRolePermissionsBoundaryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PermissionsBoundary")
    public String permissionsBoundary;
    public GetPutRolePermissionsBoundaryQueryParams withPermissionsBoundary(String permissionsBoundary) {
        this.permissionsBoundary = permissionsBoundary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetPutRolePermissionsBoundaryQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPutRolePermissionsBoundaryVersionEnum version;
    public GetPutRolePermissionsBoundaryQueryParams withVersion(GetPutRolePermissionsBoundaryVersionEnum version) {
        this.version = version;
        return this;
    }
}