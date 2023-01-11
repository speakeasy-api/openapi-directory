package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDbClusterActionEnum action;
    public GetDeleteDbClusterQueryParams withAction(GetDeleteDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterIdentifier")
    public String dbClusterIdentifier;
    public GetDeleteDbClusterQueryParams withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FinalDBSnapshotIdentifier")
    public String finalDBSnapshotIdentifier;
    public GetDeleteDbClusterQueryParams withFinalDbSnapshotIdentifier(String finalDBSnapshotIdentifier) {
        this.finalDBSnapshotIdentifier = finalDBSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SkipFinalSnapshot")
    public Boolean skipFinalSnapshot;
    public GetDeleteDbClusterQueryParams withSkipFinalSnapshot(Boolean skipFinalSnapshot) {
        this.skipFinalSnapshot = skipFinalSnapshot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDbClusterVersionEnum version;
    public GetDeleteDbClusterQueryParams withVersion(GetDeleteDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}