package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableSnapshotCopyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableSnapshotCopyActionEnum action;
    public PostDisableSnapshotCopyQueryParams withAction(PostDisableSnapshotCopyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableSnapshotCopyVersionEnum version;
    public PostDisableSnapshotCopyQueryParams withVersion(PostDisableSnapshotCopyVersionEnum version) {
        this.version = version;
        return this;
    }
}