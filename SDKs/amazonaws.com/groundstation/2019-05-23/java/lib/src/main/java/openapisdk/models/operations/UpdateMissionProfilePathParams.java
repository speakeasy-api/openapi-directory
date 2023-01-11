package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMissionProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=missionProfileId")
    public String missionProfileId;
    public UpdateMissionProfilePathParams withMissionProfileId(String missionProfileId) {
        this.missionProfileId = missionProfileId;
        return this;
    }
}