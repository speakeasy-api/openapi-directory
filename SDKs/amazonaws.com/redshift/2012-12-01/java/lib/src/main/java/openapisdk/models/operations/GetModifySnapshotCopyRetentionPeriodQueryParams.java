package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifySnapshotCopyRetentionPeriodQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifySnapshotCopyRetentionPeriodActionEnum action;
    public GetModifySnapshotCopyRetentionPeriodQueryParams withAction(GetModifySnapshotCopyRetentionPeriodActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetModifySnapshotCopyRetentionPeriodQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Manual")
    public Boolean manual;
    public GetModifySnapshotCopyRetentionPeriodQueryParams withManual(Boolean manual) {
        this.manual = manual;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RetentionPeriod")
    public Long retentionPeriod;
    public GetModifySnapshotCopyRetentionPeriodQueryParams withRetentionPeriod(Long retentionPeriod) {
        this.retentionPeriod = retentionPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifySnapshotCopyRetentionPeriodVersionEnum version;
    public GetModifySnapshotCopyRetentionPeriodQueryParams withVersion(GetModifySnapshotCopyRetentionPeriodVersionEnum version) {
        this.version = version;
        return this;
    }
}