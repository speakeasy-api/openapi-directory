package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCopyClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCopyClusterSnapshotActionEnum action;
    public GetCopyClusterSnapshotQueryParams withAction(GetCopyClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ManualSnapshotRetentionPeriod")
    public Long manualSnapshotRetentionPeriod;
    public GetCopyClusterSnapshotQueryParams withManualSnapshotRetentionPeriod(Long manualSnapshotRetentionPeriod) {
        this.manualSnapshotRetentionPeriod = manualSnapshotRetentionPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceSnapshotClusterIdentifier")
    public String sourceSnapshotClusterIdentifier;
    public GetCopyClusterSnapshotQueryParams withSourceSnapshotClusterIdentifier(String sourceSnapshotClusterIdentifier) {
        this.sourceSnapshotClusterIdentifier = sourceSnapshotClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceSnapshotIdentifier")
    public String sourceSnapshotIdentifier;
    public GetCopyClusterSnapshotQueryParams withSourceSnapshotIdentifier(String sourceSnapshotIdentifier) {
        this.sourceSnapshotIdentifier = sourceSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetSnapshotIdentifier")
    public String targetSnapshotIdentifier;
    public GetCopyClusterSnapshotQueryParams withTargetSnapshotIdentifier(String targetSnapshotIdentifier) {
        this.targetSnapshotIdentifier = targetSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCopyClusterSnapshotVersionEnum version;
    public GetCopyClusterSnapshotQueryParams withVersion(GetCopyClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}