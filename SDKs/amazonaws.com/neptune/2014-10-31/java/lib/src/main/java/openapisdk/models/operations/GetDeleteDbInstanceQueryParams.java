package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDbInstanceActionEnum action;
    public GetDeleteDbInstanceQueryParams withAction(GetDeleteDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetDeleteDbInstanceQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FinalDBSnapshotIdentifier")
    public String finalDBSnapshotIdentifier;
    public GetDeleteDbInstanceQueryParams withFinalDbSnapshotIdentifier(String finalDBSnapshotIdentifier) {
        this.finalDBSnapshotIdentifier = finalDBSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SkipFinalSnapshot")
    public Boolean skipFinalSnapshot;
    public GetDeleteDbInstanceQueryParams withSkipFinalSnapshot(Boolean skipFinalSnapshot) {
        this.skipFinalSnapshot = skipFinalSnapshot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDbInstanceVersionEnum version;
    public GetDeleteDbInstanceQueryParams withVersion(GetDeleteDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}