package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteRoleActionEnum action;
    public GetDeleteRoleQueryParams withAction(GetDeleteRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetDeleteRoleQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteRoleVersionEnum version;
    public GetDeleteRoleQueryParams withVersion(GetDeleteRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}