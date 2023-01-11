package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetRoleActionEnum action;
    public GetGetRoleQueryParams withAction(GetGetRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetGetRoleQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetRoleVersionEnum version;
    public GetGetRoleQueryParams withVersion(GetGetRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}