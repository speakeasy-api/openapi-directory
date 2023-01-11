package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyDbSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCopyDbSnapshotActionEnum action;
    public PostCopyDbSnapshotQueryParams withAction(PostCopyDbSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCopyDbSnapshotVersionEnum version;
    public PostCopyDbSnapshotQueryParams withVersion(PostCopyDbSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}