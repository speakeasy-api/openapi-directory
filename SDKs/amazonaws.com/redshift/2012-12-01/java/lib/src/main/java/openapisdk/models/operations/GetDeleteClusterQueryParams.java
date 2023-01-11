package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteClusterActionEnum action;
    public GetDeleteClusterQueryParams withAction(GetDeleteClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetDeleteClusterQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FinalClusterSnapshotIdentifier")
    public String finalClusterSnapshotIdentifier;
    public GetDeleteClusterQueryParams withFinalClusterSnapshotIdentifier(String finalClusterSnapshotIdentifier) {
        this.finalClusterSnapshotIdentifier = finalClusterSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FinalClusterSnapshotRetentionPeriod")
    public Long finalClusterSnapshotRetentionPeriod;
    public GetDeleteClusterQueryParams withFinalClusterSnapshotRetentionPeriod(Long finalClusterSnapshotRetentionPeriod) {
        this.finalClusterSnapshotRetentionPeriod = finalClusterSnapshotRetentionPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SkipFinalClusterSnapshot")
    public Boolean skipFinalClusterSnapshot;
    public GetDeleteClusterQueryParams withSkipFinalClusterSnapshot(Boolean skipFinalClusterSnapshot) {
        this.skipFinalClusterSnapshot = skipFinalClusterSnapshot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteClusterVersionEnum version;
    public GetDeleteClusterQueryParams withVersion(GetDeleteClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}