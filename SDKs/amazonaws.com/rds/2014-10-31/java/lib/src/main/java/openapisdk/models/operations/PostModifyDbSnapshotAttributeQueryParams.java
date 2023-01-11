package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbSnapshotAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDbSnapshotAttributeActionEnum action;
    public PostModifyDbSnapshotAttributeQueryParams withAction(PostModifyDbSnapshotAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDbSnapshotAttributeVersionEnum version;
    public PostModifyDbSnapshotAttributeQueryParams withVersion(PostModifyDbSnapshotAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}