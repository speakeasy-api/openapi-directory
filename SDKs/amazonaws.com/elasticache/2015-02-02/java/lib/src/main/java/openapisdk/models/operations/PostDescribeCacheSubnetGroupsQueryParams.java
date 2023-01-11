package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCacheSubnetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeCacheSubnetGroupsActionEnum action;
    public PostDescribeCacheSubnetGroupsQueryParams withAction(PostDescribeCacheSubnetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeCacheSubnetGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeCacheSubnetGroupsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeCacheSubnetGroupsVersionEnum version;
    public PostDescribeCacheSubnetGroupsQueryParams withVersion(PostDescribeCacheSubnetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}