package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteSnapshotActionEnum action;
    public GetDeleteSnapshotQueryParams withAction(GetDeleteSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotName")
    public String snapshotName;
    public GetDeleteSnapshotQueryParams withSnapshotName(String snapshotName) {
        this.snapshotName = snapshotName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteSnapshotVersionEnum version;
    public GetDeleteSnapshotQueryParams withVersion(GetDeleteSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}