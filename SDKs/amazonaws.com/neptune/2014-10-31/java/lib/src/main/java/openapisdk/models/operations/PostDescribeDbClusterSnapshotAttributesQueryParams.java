package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbClusterSnapshotAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbClusterSnapshotAttributesActionEnum action;
    public PostDescribeDbClusterSnapshotAttributesQueryParams withAction(PostDescribeDbClusterSnapshotAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbClusterSnapshotAttributesVersionEnum version;
    public PostDescribeDbClusterSnapshotAttributesQueryParams withVersion(PostDescribeDbClusterSnapshotAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}