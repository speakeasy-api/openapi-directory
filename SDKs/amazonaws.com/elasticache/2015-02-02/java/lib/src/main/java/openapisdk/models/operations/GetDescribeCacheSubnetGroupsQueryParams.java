package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeCacheSubnetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeCacheSubnetGroupsActionEnum action;
    public GetDescribeCacheSubnetGroupsQueryParams withAction(GetDescribeCacheSubnetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheSubnetGroupName")
    public String cacheSubnetGroupName;
    public GetDescribeCacheSubnetGroupsQueryParams withCacheSubnetGroupName(String cacheSubnetGroupName) {
        this.cacheSubnetGroupName = cacheSubnetGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeCacheSubnetGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeCacheSubnetGroupsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeCacheSubnetGroupsVersionEnum version;
    public GetDescribeCacheSubnetGroupsQueryParams withVersion(GetDescribeCacheSubnetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}