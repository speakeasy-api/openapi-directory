package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDbSnapshotAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDbSnapshotAttributesActionEnum action;
    public GetDescribeDbSnapshotAttributesQueryParams withAction(GetDescribeDbSnapshotAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSnapshotIdentifier")
    public String dbSnapshotIdentifier;
    public GetDescribeDbSnapshotAttributesQueryParams withDbSnapshotIdentifier(String dbSnapshotIdentifier) {
        this.dbSnapshotIdentifier = dbSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDbSnapshotAttributesVersionEnum version;
    public GetDescribeDbSnapshotAttributesQueryParams withVersion(GetDescribeDbSnapshotAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}