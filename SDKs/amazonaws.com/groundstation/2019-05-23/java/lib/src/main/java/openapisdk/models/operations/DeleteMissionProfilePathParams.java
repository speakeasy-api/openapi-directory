package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMissionProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=missionProfileId")
    public String missionProfileId;
    public DeleteMissionProfilePathParams withMissionProfileId(String missionProfileId) {
        this.missionProfileId = missionProfileId;
        return this;
    }
}