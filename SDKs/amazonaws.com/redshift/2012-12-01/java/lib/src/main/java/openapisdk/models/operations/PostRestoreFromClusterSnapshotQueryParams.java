package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreFromClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRestoreFromClusterSnapshotActionEnum action;
    public PostRestoreFromClusterSnapshotQueryParams withAction(PostRestoreFromClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRestoreFromClusterSnapshotVersionEnum version;
    public PostRestoreFromClusterSnapshotQueryParams withVersion(PostRestoreFromClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}