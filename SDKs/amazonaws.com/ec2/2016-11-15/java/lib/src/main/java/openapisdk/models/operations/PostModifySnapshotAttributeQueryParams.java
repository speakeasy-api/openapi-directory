package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifySnapshotAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifySnapshotAttributeActionEnum action;
    public PostModifySnapshotAttributeQueryParams withAction(PostModifySnapshotAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifySnapshotAttributeVersionEnum version;
    public PostModifySnapshotAttributeQueryParams withVersion(PostModifySnapshotAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}