package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbSnapshotAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbSnapshotAttributesActionEnum action;
    public PostDescribeDbSnapshotAttributesQueryParams withAction(PostDescribeDbSnapshotAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbSnapshotAttributesVersionEnum version;
    public PostDescribeDbSnapshotAttributesQueryParams withVersion(PostDescribeDbSnapshotAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}