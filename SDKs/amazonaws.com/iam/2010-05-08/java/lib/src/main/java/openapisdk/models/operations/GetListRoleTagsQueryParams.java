package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListRoleTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListRoleTagsActionEnum action;
    public GetListRoleTagsQueryParams withAction(GetListRoleTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListRoleTagsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListRoleTagsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetListRoleTagsQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListRoleTagsVersionEnum version;
    public GetListRoleTagsQueryParams withVersion(GetListRoleTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}