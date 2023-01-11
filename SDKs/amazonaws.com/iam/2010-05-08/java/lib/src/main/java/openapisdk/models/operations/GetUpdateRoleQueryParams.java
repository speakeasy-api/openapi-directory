package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateRoleActionEnum action;
    public GetUpdateRoleQueryParams withAction(GetUpdateRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetUpdateRoleQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxSessionDuration")
    public Long maxSessionDuration;
    public GetUpdateRoleQueryParams withMaxSessionDuration(Long maxSessionDuration) {
        this.maxSessionDuration = maxSessionDuration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetUpdateRoleQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateRoleVersionEnum version;
    public GetUpdateRoleQueryParams withVersion(GetUpdateRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}