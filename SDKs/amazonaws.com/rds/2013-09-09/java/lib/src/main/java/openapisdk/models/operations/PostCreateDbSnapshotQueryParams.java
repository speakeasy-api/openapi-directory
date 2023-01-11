package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDbSnapshotActionEnum action;
    public PostCreateDbSnapshotQueryParams withAction(PostCreateDbSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDbSnapshotVersionEnum version;
    public PostCreateDbSnapshotQueryParams withVersion(PostCreateDbSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}