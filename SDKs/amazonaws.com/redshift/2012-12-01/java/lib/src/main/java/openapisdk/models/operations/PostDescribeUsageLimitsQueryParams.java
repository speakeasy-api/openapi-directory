package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeUsageLimitsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeUsageLimitsActionEnum action;
    public PostDescribeUsageLimitsQueryParams withAction(PostDescribeUsageLimitsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeUsageLimitsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeUsageLimitsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeUsageLimitsVersionEnum version;
    public PostDescribeUsageLimitsQueryParams withVersion(PostDescribeUsageLimitsVersionEnum version) {
        this.version = version;
        return this;
    }
}