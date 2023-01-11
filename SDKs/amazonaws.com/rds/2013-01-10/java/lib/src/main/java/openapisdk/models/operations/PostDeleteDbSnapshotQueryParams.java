package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDbSnapshotActionEnum action;
    public PostDeleteDbSnapshotQueryParams withAction(PostDeleteDbSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDbSnapshotVersionEnum version;
    public PostDeleteDbSnapshotQueryParams withVersion(PostDeleteDbSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}