package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDbClusterSnapshotActionEnum action;
    public PostDeleteDbClusterSnapshotQueryParams withAction(PostDeleteDbClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDbClusterSnapshotVersionEnum version;
    public PostDeleteDbClusterSnapshotQueryParams withVersion(PostDeleteDbClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}