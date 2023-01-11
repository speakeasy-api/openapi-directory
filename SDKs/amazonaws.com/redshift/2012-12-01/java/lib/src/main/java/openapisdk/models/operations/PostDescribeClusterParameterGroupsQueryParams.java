package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClusterParameterGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeClusterParameterGroupsActionEnum action;
    public PostDescribeClusterParameterGroupsQueryParams withAction(PostDescribeClusterParameterGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeClusterParameterGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeClusterParameterGroupsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeClusterParameterGroupsVersionEnum version;
    public PostDescribeClusterParameterGroupsQueryParams withVersion(PostDescribeClusterParameterGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}