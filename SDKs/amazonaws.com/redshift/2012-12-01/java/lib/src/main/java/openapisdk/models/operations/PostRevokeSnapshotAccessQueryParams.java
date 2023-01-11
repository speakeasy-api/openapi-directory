package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeSnapshotAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRevokeSnapshotAccessActionEnum action;
    public PostRevokeSnapshotAccessQueryParams withAction(PostRevokeSnapshotAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRevokeSnapshotAccessVersionEnum version;
    public PostRevokeSnapshotAccessQueryParams withVersion(PostRevokeSnapshotAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}