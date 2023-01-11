package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableFastSnapshotRestoresQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableFastSnapshotRestoresActionEnum action;
    public PostEnableFastSnapshotRestoresQueryParams withAction(PostEnableFastSnapshotRestoresActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableFastSnapshotRestoresVersionEnum version;
    public PostEnableFastSnapshotRestoresQueryParams withVersion(PostEnableFastSnapshotRestoresVersionEnum version) {
        this.version = version;
        return this;
    }
}