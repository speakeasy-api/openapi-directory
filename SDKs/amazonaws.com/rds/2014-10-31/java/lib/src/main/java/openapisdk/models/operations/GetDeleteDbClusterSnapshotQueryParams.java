package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDbClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDbClusterSnapshotActionEnum action;
    public GetDeleteDbClusterSnapshotQueryParams withAction(GetDeleteDbClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterSnapshotIdentifier")
    public String dbClusterSnapshotIdentifier;
    public GetDeleteDbClusterSnapshotQueryParams withDbClusterSnapshotIdentifier(String dbClusterSnapshotIdentifier) {
        this.dbClusterSnapshotIdentifier = dbClusterSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDbClusterSnapshotVersionEnum version;
    public GetDeleteDbClusterSnapshotQueryParams withVersion(GetDeleteDbClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}