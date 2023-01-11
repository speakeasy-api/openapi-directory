package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbSecurityGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbSecurityGroupsActionEnum action;
    public PostDescribeDbSecurityGroupsQueryParams withAction(PostDescribeDbSecurityGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeDbSecurityGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeDbSecurityGroupsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbSecurityGroupsVersionEnum version;
    public PostDescribeDbSecurityGroupsQueryParams withVersion(PostDescribeDbSecurityGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}