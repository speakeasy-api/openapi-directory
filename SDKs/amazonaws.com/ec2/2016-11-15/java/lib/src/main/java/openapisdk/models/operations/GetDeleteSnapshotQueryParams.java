package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteSnapshotActionEnum action;
    public GetDeleteSnapshotQueryParams withAction(GetDeleteSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteSnapshotQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotId")
    public String snapshotId;
    public GetDeleteSnapshotQueryParams withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteSnapshotVersionEnum version;
    public GetDeleteSnapshotQueryParams withVersion(GetDeleteSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}