package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumeActionByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volume_id")
    public String volumeId;
    public PostVolumeActionByIdPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}