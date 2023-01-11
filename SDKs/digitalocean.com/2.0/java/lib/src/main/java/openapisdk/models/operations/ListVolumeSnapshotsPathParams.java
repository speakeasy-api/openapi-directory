package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVolumeSnapshotsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volume_id")
    public String volumeId;
    public ListVolumeSnapshotsPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}