package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableFastSnapshotRestoresQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableFastSnapshotRestoresActionEnum action;
    public PostDisableFastSnapshotRestoresQueryParams withAction(PostDisableFastSnapshotRestoresActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableFastSnapshotRestoresVersionEnum version;
    public PostDisableFastSnapshotRestoresQueryParams withVersion(PostDisableFastSnapshotRestoresVersionEnum version) {
        this.version = version;
        return this;
    }
}