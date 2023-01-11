package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDbSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDbSnapshotActionEnum action;
    public GetDeleteDbSnapshotQueryParams withAction(GetDeleteDbSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSnapshotIdentifier")
    public String dbSnapshotIdentifier;
    public GetDeleteDbSnapshotQueryParams withDbSnapshotIdentifier(String dbSnapshotIdentifier) {
        this.dbSnapshotIdentifier = dbSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDbSnapshotVersionEnum version;
    public GetDeleteDbSnapshotQueryParams withVersion(GetDeleteDbSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}