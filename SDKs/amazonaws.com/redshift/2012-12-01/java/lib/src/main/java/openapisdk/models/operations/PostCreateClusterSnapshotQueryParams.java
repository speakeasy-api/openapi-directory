package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateClusterSnapshotActionEnum action;
    public PostCreateClusterSnapshotQueryParams withAction(PostCreateClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateClusterSnapshotVersionEnum version;
    public PostCreateClusterSnapshotQueryParams withVersion(PostCreateClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}