package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateRoleDescriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateRoleDescriptionActionEnum action;
    public GetUpdateRoleDescriptionQueryParams withAction(GetUpdateRoleDescriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetUpdateRoleDescriptionQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetUpdateRoleDescriptionQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateRoleDescriptionVersionEnum version;
    public GetUpdateRoleDescriptionQueryParams withVersion(GetUpdateRoleDescriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}