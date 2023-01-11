package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeOrderableClusterOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeOrderableClusterOptionsActionEnum action;
    public PostDescribeOrderableClusterOptionsQueryParams withAction(PostDescribeOrderableClusterOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeOrderableClusterOptionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeOrderableClusterOptionsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeOrderableClusterOptionsVersionEnum version;
    public PostDescribeOrderableClusterOptionsQueryParams withVersion(PostDescribeOrderableClusterOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}