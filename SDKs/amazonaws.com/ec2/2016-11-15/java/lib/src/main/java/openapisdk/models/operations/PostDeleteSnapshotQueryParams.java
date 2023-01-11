package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteSnapshotActionEnum action;
    public PostDeleteSnapshotQueryParams withAction(PostDeleteSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteSnapshotVersionEnum version;
    public PostDeleteSnapshotQueryParams withVersion(PostDeleteSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}