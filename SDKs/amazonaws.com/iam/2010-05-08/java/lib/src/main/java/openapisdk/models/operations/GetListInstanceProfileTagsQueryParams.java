package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListInstanceProfileTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListInstanceProfileTagsActionEnum action;
    public GetListInstanceProfileTagsQueryParams withAction(GetListInstanceProfileTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceProfileName")
    public String instanceProfileName;
    public GetListInstanceProfileTagsQueryParams withInstanceProfileName(String instanceProfileName) {
        this.instanceProfileName = instanceProfileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListInstanceProfileTagsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListInstanceProfileTagsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListInstanceProfileTagsVersionEnum version;
    public GetListInstanceProfileTagsQueryParams withVersion(GetListInstanceProfileTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}