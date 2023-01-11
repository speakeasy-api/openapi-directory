package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeServiceUpdatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeServiceUpdatesActionEnum action;
    public PostDescribeServiceUpdatesQueryParams withAction(PostDescribeServiceUpdatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeServiceUpdatesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeServiceUpdatesQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeServiceUpdatesVersionEnum version;
    public PostDescribeServiceUpdatesQueryParams withVersion(PostDescribeServiceUpdatesVersionEnum version) {
        this.version = version;
        return this;
    }
}