package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAllVolumeActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volume_id")
    public String volumeId;
    public ListAllVolumeActionsPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}