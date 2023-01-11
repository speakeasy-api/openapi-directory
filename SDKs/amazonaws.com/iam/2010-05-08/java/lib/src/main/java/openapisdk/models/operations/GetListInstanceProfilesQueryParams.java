package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListInstanceProfilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListInstanceProfilesActionEnum action;
    public GetListInstanceProfilesQueryParams withAction(GetListInstanceProfilesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListInstanceProfilesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListInstanceProfilesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PathPrefix")
    public String pathPrefix;
    public GetListInstanceProfilesQueryParams withPathPrefix(String pathPrefix) {
        this.pathPrefix = pathPrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListInstanceProfilesVersionEnum version;
    public GetListInstanceProfilesQueryParams withVersion(GetListInstanceProfilesVersionEnum version) {
        this.version = version;
        return this;
    }
}