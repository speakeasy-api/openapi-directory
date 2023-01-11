package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDbSnapshotsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDbSnapshotsActionEnum action;
    public GetDescribeDbSnapshotsQueryParams withAction(GetDescribeDbSnapshotsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetDescribeDbSnapshotsQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSnapshotIdentifier")
    public String dbSnapshotIdentifier;
    public GetDescribeDbSnapshotsQueryParams withDbSnapshotIdentifier(String dbSnapshotIdentifier) {
        this.dbSnapshotIdentifier = dbSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeDbSnapshotsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeDbSnapshotsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotType")
    public String snapshotType;
    public GetDescribeDbSnapshotsQueryParams withSnapshotType(String snapshotType) {
        this.snapshotType = snapshotType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDbSnapshotsVersionEnum version;
    public GetDescribeDbSnapshotsQueryParams withVersion(GetDescribeDbSnapshotsVersionEnum version) {
        this.version = version;
        return this;
    }
}