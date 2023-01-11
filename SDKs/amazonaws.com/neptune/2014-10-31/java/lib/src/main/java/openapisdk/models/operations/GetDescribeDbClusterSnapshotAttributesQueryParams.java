package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDbClusterSnapshotAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDbClusterSnapshotAttributesActionEnum action;
    public GetDescribeDbClusterSnapshotAttributesQueryParams withAction(GetDescribeDbClusterSnapshotAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterSnapshotIdentifier")
    public String dbClusterSnapshotIdentifier;
    public GetDescribeDbClusterSnapshotAttributesQueryParams withDbClusterSnapshotIdentifier(String dbClusterSnapshotIdentifier) {
        this.dbClusterSnapshotIdentifier = dbClusterSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDbClusterSnapshotAttributesVersionEnum version;
    public GetDescribeDbClusterSnapshotAttributesQueryParams withVersion(GetDescribeDbClusterSnapshotAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}