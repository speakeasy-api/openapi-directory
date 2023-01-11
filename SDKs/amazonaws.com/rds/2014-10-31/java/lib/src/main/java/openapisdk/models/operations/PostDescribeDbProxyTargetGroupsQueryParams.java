package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbProxyTargetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbProxyTargetGroupsActionEnum action;
    public PostDescribeDbProxyTargetGroupsQueryParams withAction(PostDescribeDbProxyTargetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeDbProxyTargetGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeDbProxyTargetGroupsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbProxyTargetGroupsVersionEnum version;
    public PostDescribeDbProxyTargetGroupsQueryParams withVersion(PostDescribeDbProxyTargetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}