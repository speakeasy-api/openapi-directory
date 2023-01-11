package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListUsersActionEnum action;
    public GetListUsersQueryParams withAction(GetListUsersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListUsersQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListUsersQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PathPrefix")
    public String pathPrefix;
    public GetListUsersQueryParams withPathPrefix(String pathPrefix) {
        this.pathPrefix = pathPrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListUsersVersionEnum version;
    public GetListUsersQueryParams withVersion(GetListUsersVersionEnum version) {
        this.version = version;
        return this;
    }
}