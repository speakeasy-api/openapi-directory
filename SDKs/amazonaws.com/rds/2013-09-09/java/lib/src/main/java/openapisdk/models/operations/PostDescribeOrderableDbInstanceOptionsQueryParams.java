package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeOrderableDbInstanceOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeOrderableDbInstanceOptionsActionEnum action;
    public PostDescribeOrderableDbInstanceOptionsQueryParams withAction(PostDescribeOrderableDbInstanceOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeOrderableDbInstanceOptionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeOrderableDbInstanceOptionsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeOrderableDbInstanceOptionsVersionEnum version;
    public PostDescribeOrderableDbInstanceOptionsQueryParams withVersion(PostDescribeOrderableDbInstanceOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}