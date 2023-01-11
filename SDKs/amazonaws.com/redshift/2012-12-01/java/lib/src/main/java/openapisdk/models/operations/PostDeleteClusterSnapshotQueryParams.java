package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteClusterSnapshotActionEnum action;
    public PostDeleteClusterSnapshotQueryParams withAction(PostDeleteClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteClusterSnapshotVersionEnum version;
    public PostDeleteClusterSnapshotQueryParams withVersion(PostDeleteClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}