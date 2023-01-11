package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableSnapshotCopyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableSnapshotCopyActionEnum action;
    public PostEnableSnapshotCopyQueryParams withAction(PostEnableSnapshotCopyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableSnapshotCopyVersionEnum version;
    public PostEnableSnapshotCopyQueryParams withVersion(PostEnableSnapshotCopyVersionEnum version) {
        this.version = version;
        return this;
    }
}