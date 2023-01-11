package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStopDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetStopDbInstanceActionEnum action;
    public GetStopDbInstanceQueryParams withAction(GetStopDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetStopDbInstanceQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSnapshotIdentifier")
    public String dbSnapshotIdentifier;
    public GetStopDbInstanceQueryParams withDbSnapshotIdentifier(String dbSnapshotIdentifier) {
        this.dbSnapshotIdentifier = dbSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetStopDbInstanceVersionEnum version;
    public GetStopDbInstanceQueryParams withVersion(GetStopDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}