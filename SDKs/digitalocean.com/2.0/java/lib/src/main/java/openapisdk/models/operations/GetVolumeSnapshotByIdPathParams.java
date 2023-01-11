package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVolumeSnapshotByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=snapshot_id")
    public Object snapshotId;
    public GetVolumeSnapshotByIdPathParams withSnapshotId(Object snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
}