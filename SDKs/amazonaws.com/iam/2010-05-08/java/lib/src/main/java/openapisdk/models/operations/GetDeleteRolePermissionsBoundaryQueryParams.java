package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteRolePermissionsBoundaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteRolePermissionsBoundaryActionEnum action;
    public GetDeleteRolePermissionsBoundaryQueryParams withAction(GetDeleteRolePermissionsBoundaryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetDeleteRolePermissionsBoundaryQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteRolePermissionsBoundaryVersionEnum version;
    public GetDeleteRolePermissionsBoundaryQueryParams withVersion(GetDeleteRolePermissionsBoundaryVersionEnum version) {
        this.version = version;
        return this;
    }
}