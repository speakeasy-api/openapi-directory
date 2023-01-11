package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifySnapshotCopyRetentionPeriodQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifySnapshotCopyRetentionPeriodActionEnum action;
    public PostModifySnapshotCopyRetentionPeriodQueryParams withAction(PostModifySnapshotCopyRetentionPeriodActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifySnapshotCopyRetentionPeriodVersionEnum version;
    public PostModifySnapshotCopyRetentionPeriodQueryParams withVersion(PostModifySnapshotCopyRetentionPeriodVersionEnum version) {
        this.version = version;
        return this;
    }
}