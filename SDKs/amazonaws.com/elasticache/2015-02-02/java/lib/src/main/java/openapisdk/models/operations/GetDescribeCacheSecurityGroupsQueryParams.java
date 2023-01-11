package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeCacheSecurityGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeCacheSecurityGroupsActionEnum action;
    public GetDescribeCacheSecurityGroupsQueryParams withAction(GetDescribeCacheSecurityGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheSecurityGroupName")
    public String cacheSecurityGroupName;
    public GetDescribeCacheSecurityGroupsQueryParams withCacheSecurityGroupName(String cacheSecurityGroupName) {
        this.cacheSecurityGroupName = cacheSecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeCacheSecurityGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeCacheSecurityGroupsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeCacheSecurityGroupsVersionEnum version;
    public GetDescribeCacheSecurityGroupsQueryParams withVersion(GetDescribeCacheSecurityGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}