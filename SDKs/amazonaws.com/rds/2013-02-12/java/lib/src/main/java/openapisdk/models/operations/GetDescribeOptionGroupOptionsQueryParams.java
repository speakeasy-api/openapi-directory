package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeOptionGroupOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeOptionGroupOptionsActionEnum action;
    public GetDescribeOptionGroupOptionsQueryParams withAction(GetDescribeOptionGroupOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EngineName")
    public String engineName;
    public GetDescribeOptionGroupOptionsQueryParams withEngineName(String engineName) {
        this.engineName = engineName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MajorEngineVersion")
    public String majorEngineVersion;
    public GetDescribeOptionGroupOptionsQueryParams withMajorEngineVersion(String majorEngineVersion) {
        this.majorEngineVersion = majorEngineVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeOptionGroupOptionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeOptionGroupOptionsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeOptionGroupOptionsVersionEnum version;
    public GetDescribeOptionGroupOptionsQueryParams withVersion(GetDescribeOptionGroupOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}