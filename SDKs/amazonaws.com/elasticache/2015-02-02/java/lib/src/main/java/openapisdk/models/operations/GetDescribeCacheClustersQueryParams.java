package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeCacheClustersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeCacheClustersActionEnum action;
    public GetDescribeCacheClustersQueryParams withAction(GetDescribeCacheClustersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheClusterId")
    public String cacheClusterId;
    public GetDescribeCacheClustersQueryParams withCacheClusterId(String cacheClusterId) {
        this.cacheClusterId = cacheClusterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeCacheClustersQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeCacheClustersQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ShowCacheClustersNotInReplicationGroups")
    public Boolean showCacheClustersNotInReplicationGroups;
    public GetDescribeCacheClustersQueryParams withShowCacheClustersNotInReplicationGroups(Boolean showCacheClustersNotInReplicationGroups) {
        this.showCacheClustersNotInReplicationGroups = showCacheClustersNotInReplicationGroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ShowCacheNodeInfo")
    public Boolean showCacheNodeInfo;
    public GetDescribeCacheClustersQueryParams withShowCacheNodeInfo(Boolean showCacheNodeInfo) {
        this.showCacheNodeInfo = showCacheNodeInfo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeCacheClustersVersionEnum version;
    public GetDescribeCacheClustersQueryParams withVersion(GetDescribeCacheClustersVersionEnum version) {
        this.version = version;
        return this;
    }
}