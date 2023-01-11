package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoveRoleFromInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRemoveRoleFromInstanceProfileActionEnum action;
    public GetRemoveRoleFromInstanceProfileQueryParams withAction(GetRemoveRoleFromInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceProfileName")
    public String instanceProfileName;
    public GetRemoveRoleFromInstanceProfileQueryParams withInstanceProfileName(String instanceProfileName) {
        this.instanceProfileName = instanceProfileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetRemoveRoleFromInstanceProfileQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRemoveRoleFromInstanceProfileVersionEnum version;
    public GetRemoveRoleFromInstanceProfileQueryParams withVersion(GetRemoveRoleFromInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}