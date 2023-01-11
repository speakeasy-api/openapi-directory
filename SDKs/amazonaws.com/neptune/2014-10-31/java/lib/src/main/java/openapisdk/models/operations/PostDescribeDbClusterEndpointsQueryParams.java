package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbClusterEndpointsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbClusterEndpointsActionEnum action;
    public PostDescribeDbClusterEndpointsQueryParams withAction(PostDescribeDbClusterEndpointsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeDbClusterEndpointsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeDbClusterEndpointsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbClusterEndpointsVersionEnum version;
    public PostDescribeDbClusterEndpointsQueryParams withVersion(PostDescribeDbClusterEndpointsVersionEnum version) {
        this.version = version;
        return this;
    }
}