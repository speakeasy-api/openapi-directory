package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSnapshotSchedulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSnapshotSchedulesActionEnum action;
    public PostDescribeSnapshotSchedulesQueryParams withAction(PostDescribeSnapshotSchedulesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeSnapshotSchedulesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeSnapshotSchedulesQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSnapshotSchedulesVersionEnum version;
    public PostDescribeSnapshotSchedulesQueryParams withVersion(PostDescribeSnapshotSchedulesVersionEnum version) {
        this.version = version;
        return this;
    }
}