package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeSnapshotAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeSnapshotAttributeActionEnum action;
    public GetDescribeSnapshotAttributeQueryParams withAction(GetDescribeSnapshotAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GetDescribeSnapshotAttributeAttributeEnum attribute;
    public GetDescribeSnapshotAttributeQueryParams withAttribute(GetDescribeSnapshotAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDescribeSnapshotAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotId")
    public String snapshotId;
    public GetDescribeSnapshotAttributeQueryParams withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeSnapshotAttributeVersionEnum version;
    public GetDescribeSnapshotAttributeQueryParams withVersion(GetDescribeSnapshotAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}