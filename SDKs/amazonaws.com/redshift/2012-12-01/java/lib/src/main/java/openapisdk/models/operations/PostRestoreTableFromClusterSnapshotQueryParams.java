package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreTableFromClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRestoreTableFromClusterSnapshotActionEnum action;
    public PostRestoreTableFromClusterSnapshotQueryParams withAction(PostRestoreTableFromClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRestoreTableFromClusterSnapshotVersionEnum version;
    public PostRestoreTableFromClusterSnapshotQueryParams withVersion(PostRestoreTableFromClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}