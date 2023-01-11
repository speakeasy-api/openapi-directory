package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSnapshotAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSnapshotAttributeActionEnum action;
    public PostDescribeSnapshotAttributeQueryParams withAction(PostDescribeSnapshotAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSnapshotAttributeVersionEnum version;
    public PostDescribeSnapshotAttributeQueryParams withVersion(PostDescribeSnapshotAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}