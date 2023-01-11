package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyClusterSnapshotActionEnum action;
    public PostModifyClusterSnapshotQueryParams withAction(PostModifyClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyClusterSnapshotVersionEnum version;
    public PostModifyClusterSnapshotQueryParams withVersion(PostModifyClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}