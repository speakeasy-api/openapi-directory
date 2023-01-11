package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDbParametersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDbParametersActionEnum action;
    public GetDescribeDbParametersQueryParams withAction(GetDescribeDbParametersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBParameterGroupName")
    public String dbParameterGroupName;
    public GetDescribeDbParametersQueryParams withDbParameterGroupName(String dbParameterGroupName) {
        this.dbParameterGroupName = dbParameterGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeDbParametersQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeDbParametersQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Source")
    public String source;
    public GetDescribeDbParametersQueryParams withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDbParametersVersionEnum version;
    public GetDescribeDbParametersQueryParams withVersion(GetDescribeDbParametersVersionEnum version) {
        this.version = version;
        return this;
    }
}