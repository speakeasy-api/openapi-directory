package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEndpointAuthorizationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEndpointAuthorizationActionEnum action;
    public PostDescribeEndpointAuthorizationQueryParams withAction(PostDescribeEndpointAuthorizationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeEndpointAuthorizationQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeEndpointAuthorizationQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEndpointAuthorizationVersionEnum version;
    public PostDescribeEndpointAuthorizationQueryParams withVersion(PostDescribeEndpointAuthorizationVersionEnum version) {
        this.version = version;
        return this;
    }
}