package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListInstanceProfilesForRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListInstanceProfilesForRoleActionEnum action;
    public GetListInstanceProfilesForRoleQueryParams withAction(GetListInstanceProfilesForRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListInstanceProfilesForRoleQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListInstanceProfilesForRoleQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetListInstanceProfilesForRoleQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListInstanceProfilesForRoleVersionEnum version;
    public GetListInstanceProfilesForRoleQueryParams withVersion(GetListInstanceProfilesForRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}