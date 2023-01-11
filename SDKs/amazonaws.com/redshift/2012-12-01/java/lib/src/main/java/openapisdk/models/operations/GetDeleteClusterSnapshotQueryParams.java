package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteClusterSnapshotActionEnum action;
    public GetDeleteClusterSnapshotQueryParams withAction(GetDeleteClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotClusterIdentifier")
    public String snapshotClusterIdentifier;
    public GetDeleteClusterSnapshotQueryParams withSnapshotClusterIdentifier(String snapshotClusterIdentifier) {
        this.snapshotClusterIdentifier = snapshotClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotIdentifier")
    public String snapshotIdentifier;
    public GetDeleteClusterSnapshotQueryParams withSnapshotIdentifier(String snapshotIdentifier) {
        this.snapshotIdentifier = snapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteClusterSnapshotVersionEnum version;
    public GetDeleteClusterSnapshotQueryParams withVersion(GetDeleteClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}