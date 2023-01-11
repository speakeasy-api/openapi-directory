package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTableRestoreStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTableRestoreStatusActionEnum action;
    public PostDescribeTableRestoreStatusQueryParams withAction(PostDescribeTableRestoreStatusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeTableRestoreStatusQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeTableRestoreStatusQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTableRestoreStatusVersionEnum version;
    public PostDescribeTableRestoreStatusQueryParams withVersion(PostDescribeTableRestoreStatusVersionEnum version) {
        this.version = version;
        return this;
    }
}