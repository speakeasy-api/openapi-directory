package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbSnapshotsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbSnapshotsActionEnum action;
    public PostDescribeDbSnapshotsQueryParams withAction(PostDescribeDbSnapshotsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbSnapshotsVersionEnum version;
    public PostDescribeDbSnapshotsQueryParams withVersion(PostDescribeDbSnapshotsVersionEnum version) {
        this.version = version;
        return this;
    }
}