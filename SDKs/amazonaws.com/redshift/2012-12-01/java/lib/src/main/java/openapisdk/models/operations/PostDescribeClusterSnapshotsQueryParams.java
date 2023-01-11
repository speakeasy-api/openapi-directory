package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClusterSnapshotsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeClusterSnapshotsActionEnum action;
    public PostDescribeClusterSnapshotsQueryParams withAction(PostDescribeClusterSnapshotsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeClusterSnapshotsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeClusterSnapshotsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeClusterSnapshotsVersionEnum version;
    public PostDescribeClusterSnapshotsQueryParams withVersion(PostDescribeClusterSnapshotsVersionEnum version) {
        this.version = version;
        return this;
    }
}