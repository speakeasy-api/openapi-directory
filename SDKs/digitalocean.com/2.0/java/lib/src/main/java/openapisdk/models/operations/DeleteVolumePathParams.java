package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVolumePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volume_id")
    public String volumeId;
    public DeleteVolumePathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}