package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSnapshotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=snapshot_id")
    public Object snapshotId;
    public DeleteSnapshotPathParams withSnapshotId(Object snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
}