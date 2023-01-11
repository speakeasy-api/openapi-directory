package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCacheEngineVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeCacheEngineVersionsActionEnum action;
    public PostDescribeCacheEngineVersionsQueryParams withAction(PostDescribeCacheEngineVersionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeCacheEngineVersionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeCacheEngineVersionsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeCacheEngineVersionsVersionEnum version;
    public PostDescribeCacheEngineVersionsQueryParams withVersion(PostDescribeCacheEngineVersionsVersionEnum version) {
        this.version = version;
        return this;
    }
}