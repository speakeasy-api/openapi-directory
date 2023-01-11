package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDbEngineVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDbEngineVersionsActionEnum action;
    public GetDescribeDbEngineVersionsQueryParams withAction(GetDescribeDbEngineVersionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBParameterGroupFamily")
    public String dbParameterGroupFamily;
    public GetDescribeDbEngineVersionsQueryParams withDbParameterGroupFamily(String dbParameterGroupFamily) {
        this.dbParameterGroupFamily = dbParameterGroupFamily;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DefaultOnly")
    public Boolean defaultOnly;
    public GetDescribeDbEngineVersionsQueryParams withDefaultOnly(Boolean defaultOnly) {
        this.defaultOnly = defaultOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Engine")
    public String engine;
    public GetDescribeDbEngineVersionsQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EngineVersion")
    public String engineVersion;
    public GetDescribeDbEngineVersionsQueryParams withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ListSupportedCharacterSets")
    public Boolean listSupportedCharacterSets;
    public GetDescribeDbEngineVersionsQueryParams withListSupportedCharacterSets(Boolean listSupportedCharacterSets) {
        this.listSupportedCharacterSets = listSupportedCharacterSets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeDbEngineVersionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeDbEngineVersionsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDbEngineVersionsVersionEnum version;
    public GetDescribeDbEngineVersionsQueryParams withVersion(GetDescribeDbEngineVersionsVersionEnum version) {
        this.version = version;
        return this;
    }
}