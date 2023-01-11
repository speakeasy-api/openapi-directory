package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMissionProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=missionProfileId")
    public String missionProfileId;
    public GetMissionProfilePathParams withMissionProfileId(String missionProfileId) {
        this.missionProfileId = missionProfileId;
        return this;
    }
}