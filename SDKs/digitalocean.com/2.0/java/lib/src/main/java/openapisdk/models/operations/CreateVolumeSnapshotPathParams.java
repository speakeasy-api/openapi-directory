package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVolumeSnapshotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volume_id")
    public String volumeId;
    public CreateVolumeSnapshotPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}