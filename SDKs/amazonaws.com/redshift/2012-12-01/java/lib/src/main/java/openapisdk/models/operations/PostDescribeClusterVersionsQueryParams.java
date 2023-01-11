package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClusterVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeClusterVersionsActionEnum action;
    public PostDescribeClusterVersionsQueryParams withAction(PostDescribeClusterVersionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeClusterVersionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeClusterVersionsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeClusterVersionsVersionEnum version;
    public PostDescribeClusterVersionsQueryParams withVersion(PostDescribeClusterVersionsVersionEnum version) {
        this.version = version;
        return this;
    }
}