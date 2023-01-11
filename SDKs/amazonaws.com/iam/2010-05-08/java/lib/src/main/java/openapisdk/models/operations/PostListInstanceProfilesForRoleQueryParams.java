package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListInstanceProfilesForRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListInstanceProfilesForRoleActionEnum action;
    public PostListInstanceProfilesForRoleQueryParams withAction(PostListInstanceProfilesForRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListInstanceProfilesForRoleQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListInstanceProfilesForRoleQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListInstanceProfilesForRoleVersionEnum version;
    public PostListInstanceProfilesForRoleQueryParams withVersion(PostListInstanceProfilesForRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}