package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSnapshotsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateSnapshotsActionEnum action;
    public PostCreateSnapshotsQueryParams withAction(PostCreateSnapshotsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateSnapshotsVersionEnum version;
    public PostCreateSnapshotsQueryParams withVersion(PostCreateSnapshotsVersionEnum version) {
        this.version = version;
        return this;
    }
}