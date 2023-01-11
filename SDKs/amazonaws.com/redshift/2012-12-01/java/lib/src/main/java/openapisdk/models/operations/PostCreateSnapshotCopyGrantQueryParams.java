package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSnapshotCopyGrantQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateSnapshotCopyGrantActionEnum action;
    public PostCreateSnapshotCopyGrantQueryParams withAction(PostCreateSnapshotCopyGrantActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateSnapshotCopyGrantVersionEnum version;
    public PostCreateSnapshotCopyGrantQueryParams withVersion(PostCreateSnapshotCopyGrantVersionEnum version) {
        this.version = version;
        return this;
    }
}