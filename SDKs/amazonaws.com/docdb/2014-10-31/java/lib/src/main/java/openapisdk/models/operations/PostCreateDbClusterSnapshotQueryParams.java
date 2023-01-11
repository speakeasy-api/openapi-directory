package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDbClusterSnapshotActionEnum action;
    public PostCreateDbClusterSnapshotQueryParams withAction(PostCreateDbClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDbClusterSnapshotVersionEnum version;
    public PostCreateDbClusterSnapshotQueryParams withVersion(PostCreateDbClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}