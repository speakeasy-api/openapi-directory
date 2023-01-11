package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetSnapshotAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResetSnapshotAttributeActionEnum action;
    public PostResetSnapshotAttributeQueryParams withAction(PostResetSnapshotAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResetSnapshotAttributeVersionEnum version;
    public PostResetSnapshotAttributeQueryParams withVersion(PostResetSnapshotAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}