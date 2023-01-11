package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbClusterSnapshotsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbClusterSnapshotsActionEnum action;
    public PostDescribeDbClusterSnapshotsQueryParams withAction(PostDescribeDbClusterSnapshotsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeDbClusterSnapshotsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeDbClusterSnapshotsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbClusterSnapshotsVersionEnum version;
    public PostDescribeDbClusterSnapshotsQueryParams withVersion(PostDescribeDbClusterSnapshotsVersionEnum version) {
        this.version = version;
        return this;
    }
}