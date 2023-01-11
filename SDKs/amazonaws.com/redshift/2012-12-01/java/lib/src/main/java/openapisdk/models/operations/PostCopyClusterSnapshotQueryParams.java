package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCopyClusterSnapshotActionEnum action;
    public PostCopyClusterSnapshotQueryParams withAction(PostCopyClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCopyClusterSnapshotVersionEnum version;
    public PostCopyClusterSnapshotQueryParams withVersion(PostCopyClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}