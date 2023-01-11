package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVolumeActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=action_id")
    public Long actionId;
    public GetVolumeActionPathParams withActionId(Long actionId) {
        this.actionId = actionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volume_id")
    public String volumeId;
    public GetVolumeActionPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}