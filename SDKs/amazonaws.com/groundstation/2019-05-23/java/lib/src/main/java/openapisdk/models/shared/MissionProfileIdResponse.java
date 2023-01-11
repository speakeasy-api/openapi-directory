package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MissionProfileIdResponse
 * <p/>
**/
public class MissionProfileIdResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missionProfileId")
    public String missionProfileId;
    public MissionProfileIdResponse withMissionProfileId(String missionProfileId) {
        this.missionProfileId = missionProfileId;
        return this;
    }
}