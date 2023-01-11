package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyDbClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCopyDbClusterSnapshotActionEnum action;
    public PostCopyDbClusterSnapshotQueryParams withAction(PostCopyDbClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCopyDbClusterSnapshotVersionEnum version;
    public PostCopyDbClusterSnapshotQueryParams withVersion(PostCopyDbClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}