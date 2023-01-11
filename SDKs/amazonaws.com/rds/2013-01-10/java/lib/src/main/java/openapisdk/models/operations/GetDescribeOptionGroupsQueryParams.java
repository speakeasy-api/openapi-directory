package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeOptionGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeOptionGroupsActionEnum action;
    public GetDescribeOptionGroupsQueryParams withAction(GetDescribeOptionGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EngineName")
    public String engineName;
    public GetDescribeOptionGroupsQueryParams withEngineName(String engineName) {
        this.engineName = engineName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MajorEngineVersion")
    public String majorEngineVersion;
    public GetDescribeOptionGroupsQueryParams withMajorEngineVersion(String majorEngineVersion) {
        this.majorEngineVersion = majorEngineVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeOptionGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeOptionGroupsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OptionGroupName")
    public String optionGroupName;
    public GetDescribeOptionGroupsQueryParams withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeOptionGroupsVersionEnum version;
    public GetDescribeOptionGroupsQueryParams withVersion(GetDescribeOptionGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}