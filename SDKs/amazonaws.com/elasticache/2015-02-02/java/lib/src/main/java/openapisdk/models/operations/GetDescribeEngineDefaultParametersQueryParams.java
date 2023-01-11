package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeEngineDefaultParametersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeEngineDefaultParametersActionEnum action;
    public GetDescribeEngineDefaultParametersQueryParams withAction(GetDescribeEngineDefaultParametersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheParameterGroupFamily")
    public String cacheParameterGroupFamily;
    public GetDescribeEngineDefaultParametersQueryParams withCacheParameterGroupFamily(String cacheParameterGroupFamily) {
        this.cacheParameterGroupFamily = cacheParameterGroupFamily;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeEngineDefaultParametersQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeEngineDefaultParametersQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeEngineDefaultParametersVersionEnum version;
    public GetDescribeEngineDefaultParametersQueryParams withVersion(GetDescribeEngineDefaultParametersVersionEnum version) {
        this.version = version;
        return this;
    }
}