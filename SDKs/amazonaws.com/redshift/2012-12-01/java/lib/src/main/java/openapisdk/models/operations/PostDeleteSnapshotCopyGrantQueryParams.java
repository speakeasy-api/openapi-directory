package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSnapshotCopyGrantQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteSnapshotCopyGrantActionEnum action;
    public PostDeleteSnapshotCopyGrantQueryParams withAction(PostDeleteSnapshotCopyGrantActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteSnapshotCopyGrantVersionEnum version;
    public PostDeleteSnapshotCopyGrantQueryParams withVersion(PostDeleteSnapshotCopyGrantVersionEnum version) {
        this.version = version;
        return this;
    }
}