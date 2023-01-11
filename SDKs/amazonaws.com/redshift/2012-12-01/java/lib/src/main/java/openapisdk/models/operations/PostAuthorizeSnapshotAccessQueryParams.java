package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeSnapshotAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAuthorizeSnapshotAccessActionEnum action;
    public PostAuthorizeSnapshotAccessQueryParams withAction(PostAuthorizeSnapshotAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAuthorizeSnapshotAccessVersionEnum version;
    public PostAuthorizeSnapshotAccessQueryParams withVersion(PostAuthorizeSnapshotAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}