package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeGlobalReplicationGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeGlobalReplicationGroupsActionEnum action;
    public PostDescribeGlobalReplicationGroupsQueryParams withAction(PostDescribeGlobalReplicationGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeGlobalReplicationGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeGlobalReplicationGroupsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeGlobalReplicationGroupsVersionEnum version;
    public PostDescribeGlobalReplicationGroupsQueryParams withVersion(PostDescribeGlobalReplicationGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}