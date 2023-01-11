package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVolumeSnapshotByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=snapshot_id")
    public Object snapshotId;
    public DeleteVolumeSnapshotByIdPathParams withSnapshotId(Object snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
}