package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchModifyClusterSnapshotsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostBatchModifyClusterSnapshotsActionEnum action;
    public PostBatchModifyClusterSnapshotsQueryParams withAction(PostBatchModifyClusterSnapshotsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostBatchModifyClusterSnapshotsVersionEnum version;
    public PostBatchModifyClusterSnapshotsQueryParams withVersion(PostBatchModifyClusterSnapshotsVersionEnum version) {
        this.version = version;
        return this;
    }
}