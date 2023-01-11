package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbClusterSnapshotAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDbClusterSnapshotAttributeActionEnum action;
    public PostModifyDbClusterSnapshotAttributeQueryParams withAction(PostModifyDbClusterSnapshotAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDbClusterSnapshotAttributeVersionEnum version;
    public PostModifyDbClusterSnapshotAttributeQueryParams withVersion(PostModifyDbClusterSnapshotAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}