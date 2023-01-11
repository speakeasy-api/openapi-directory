package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableSnapshotCopyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableSnapshotCopyActionEnum action;
    public GetEnableSnapshotCopyQueryParams withAction(GetEnableSnapshotCopyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetEnableSnapshotCopyQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationRegion")
    public String destinationRegion;
    public GetEnableSnapshotCopyQueryParams withDestinationRegion(String destinationRegion) {
        this.destinationRegion = destinationRegion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ManualSnapshotRetentionPeriod")
    public Long manualSnapshotRetentionPeriod;
    public GetEnableSnapshotCopyQueryParams withManualSnapshotRetentionPeriod(Long manualSnapshotRetentionPeriod) {
        this.manualSnapshotRetentionPeriod = manualSnapshotRetentionPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RetentionPeriod")
    public Long retentionPeriod;
    public GetEnableSnapshotCopyQueryParams withRetentionPeriod(Long retentionPeriod) {
        this.retentionPeriod = retentionPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotCopyGrantName")
    public String snapshotCopyGrantName;
    public GetEnableSnapshotCopyQueryParams withSnapshotCopyGrantName(String snapshotCopyGrantName) {
        this.snapshotCopyGrantName = snapshotCopyGrantName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableSnapshotCopyVersionEnum version;
    public GetEnableSnapshotCopyQueryParams withVersion(GetEnableSnapshotCopyVersionEnum version) {
        this.version = version;
        return this;
    }
}