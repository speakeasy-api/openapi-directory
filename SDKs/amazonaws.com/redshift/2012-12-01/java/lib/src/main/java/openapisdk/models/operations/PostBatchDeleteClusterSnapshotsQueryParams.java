package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchDeleteClusterSnapshotsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostBatchDeleteClusterSnapshotsActionEnum action;
    public PostBatchDeleteClusterSnapshotsQueryParams withAction(PostBatchDeleteClusterSnapshotsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostBatchDeleteClusterSnapshotsVersionEnum version;
    public PostBatchDeleteClusterSnapshotsQueryParams withVersion(PostBatchDeleteClusterSnapshotsVersionEnum version) {
        this.version = version;
        return this;
    }
}