package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbProxyEndpointsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbProxyEndpointsActionEnum action;
    public PostDescribeDbProxyEndpointsQueryParams withAction(PostDescribeDbProxyEndpointsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeDbProxyEndpointsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeDbProxyEndpointsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbProxyEndpointsVersionEnum version;
    public PostDescribeDbProxyEndpointsQueryParams withVersion(PostDescribeDbProxyEndpointsVersionEnum version) {
        this.version = version;
        return this;
    }
}