package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreDbClusterFromSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRestoreDbClusterFromSnapshotActionEnum action;
    public PostRestoreDbClusterFromSnapshotQueryParams withAction(PostRestoreDbClusterFromSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRestoreDbClusterFromSnapshotVersionEnum version;
    public PostRestoreDbClusterFromSnapshotQueryParams withVersion(PostRestoreDbClusterFromSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}