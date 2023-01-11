package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddRoleToInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAddRoleToInstanceProfileActionEnum action;
    public GetAddRoleToInstanceProfileQueryParams withAction(GetAddRoleToInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceProfileName")
    public String instanceProfileName;
    public GetAddRoleToInstanceProfileQueryParams withInstanceProfileName(String instanceProfileName) {
        this.instanceProfileName = instanceProfileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetAddRoleToInstanceProfileQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAddRoleToInstanceProfileVersionEnum version;
    public GetAddRoleToInstanceProfileQueryParams withVersion(GetAddRoleToInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}