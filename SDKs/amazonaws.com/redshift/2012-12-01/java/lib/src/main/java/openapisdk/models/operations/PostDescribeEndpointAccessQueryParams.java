package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEndpointAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEndpointAccessActionEnum action;
    public PostDescribeEndpointAccessQueryParams withAction(PostDescribeEndpointAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeEndpointAccessQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeEndpointAccessQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEndpointAccessVersionEnum version;
    public PostDescribeEndpointAccessQueryParams withVersion(PostDescribeEndpointAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}