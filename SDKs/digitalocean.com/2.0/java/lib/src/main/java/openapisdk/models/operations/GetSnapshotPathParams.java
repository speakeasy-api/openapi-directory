package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSnapshotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=snapshot_id")
    public Object snapshotId;
    public GetSnapshotPathParams withSnapshotId(Object snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
}