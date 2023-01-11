package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedCacheNodesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeReservedCacheNodesActionEnum action;
    public PostDescribeReservedCacheNodesQueryParams withAction(PostDescribeReservedCacheNodesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeReservedCacheNodesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeReservedCacheNodesQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeReservedCacheNodesVersionEnum version;
    public PostDescribeReservedCacheNodesQueryParams withVersion(PostDescribeReservedCacheNodesVersionEnum version) {
        this.version = version;
        return this;
    }
}