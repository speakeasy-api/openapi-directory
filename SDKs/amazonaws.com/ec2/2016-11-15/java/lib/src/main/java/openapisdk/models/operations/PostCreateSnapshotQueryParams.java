package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateSnapshotActionEnum action;
    public PostCreateSnapshotQueryParams withAction(PostCreateSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateSnapshotVersionEnum version;
    public PostCreateSnapshotQueryParams withVersion(PostCreateSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}