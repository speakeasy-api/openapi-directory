package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDbSnapshotActionEnum action;
    public PostModifyDbSnapshotQueryParams withAction(PostModifyDbSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDbSnapshotVersionEnum version;
    public PostModifyDbSnapshotQueryParams withVersion(PostModifyDbSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}