package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntagRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUntagRoleActionEnum action;
    public GetUntagRoleQueryParams withAction(GetUntagRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetUntagRoleQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;
    public GetUntagRoleQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUntagRoleVersionEnum version;
    public GetUntagRoleQueryParams withVersion(GetUntagRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}