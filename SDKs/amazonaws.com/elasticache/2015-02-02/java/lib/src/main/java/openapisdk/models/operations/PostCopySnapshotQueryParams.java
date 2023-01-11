package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopySnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCopySnapshotActionEnum action;
    public PostCopySnapshotQueryParams withAction(PostCopySnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCopySnapshotVersionEnum version;
    public PostCopySnapshotQueryParams withVersion(PostCopySnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}