package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeCacheEngineVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeCacheEngineVersionsActionEnum action;
    public GetDescribeCacheEngineVersionsQueryParams withAction(GetDescribeCacheEngineVersionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheParameterGroupFamily")
    public String cacheParameterGroupFamily;
    public GetDescribeCacheEngineVersionsQueryParams withCacheParameterGroupFamily(String cacheParameterGroupFamily) {
        this.cacheParameterGroupFamily = cacheParameterGroupFamily;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DefaultOnly")
    public Boolean defaultOnly;
    public GetDescribeCacheEngineVersionsQueryParams withDefaultOnly(Boolean defaultOnly) {
        this.defaultOnly = defaultOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Engine")
    public String engine;
    public GetDescribeCacheEngineVersionsQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EngineVersion")
    public String engineVersion;
    public GetDescribeCacheEngineVersionsQueryParams withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeCacheEngineVersionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeCacheEngineVersionsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeCacheEngineVersionsVersionEnum version;
    public GetDescribeCacheEngineVersionsQueryParams withVersion(GetDescribeCacheEngineVersionsVersionEnum version) {
        this.version = version;
        return this;
    }
}