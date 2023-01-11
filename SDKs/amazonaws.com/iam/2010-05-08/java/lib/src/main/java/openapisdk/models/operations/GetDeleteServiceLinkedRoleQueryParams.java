package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteServiceLinkedRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteServiceLinkedRoleActionEnum action;
    public GetDeleteServiceLinkedRoleQueryParams withAction(GetDeleteServiceLinkedRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetDeleteServiceLinkedRoleQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteServiceLinkedRoleVersionEnum version;
    public GetDeleteServiceLinkedRoleQueryParams withVersion(GetDeleteServiceLinkedRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}