package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyClusterSnapshotActionEnum action;
    public GetModifyClusterSnapshotQueryParams withAction(GetModifyClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Force")
    public Boolean force;
    public GetModifyClusterSnapshotQueryParams withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ManualSnapshotRetentionPeriod")
    public Long manualSnapshotRetentionPeriod;
    public GetModifyClusterSnapshotQueryParams withManualSnapshotRetentionPeriod(Long manualSnapshotRetentionPeriod) {
        this.manualSnapshotRetentionPeriod = manualSnapshotRetentionPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotIdentifier")
    public String snapshotIdentifier;
    public GetModifyClusterSnapshotQueryParams withSnapshotIdentifier(String snapshotIdentifier) {
        this.snapshotIdentifier = snapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyClusterSnapshotVersionEnum version;
    public GetModifyClusterSnapshotQueryParams withVersion(GetModifyClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}