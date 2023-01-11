package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVolumePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volume_id")
    public String volumeId;
    public GetVolumePathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}