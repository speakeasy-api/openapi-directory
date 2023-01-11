package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSnapshotCopyGrantsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSnapshotCopyGrantsActionEnum action;
    public PostDescribeSnapshotCopyGrantsQueryParams withAction(PostDescribeSnapshotCopyGrantsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeSnapshotCopyGrantsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeSnapshotCopyGrantsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSnapshotCopyGrantsVersionEnum version;
    public PostDescribeSnapshotCopyGrantsQueryParams withVersion(PostDescribeSnapshotCopyGrantsVersionEnum version) {
        this.version = version;
        return this;
    }
}