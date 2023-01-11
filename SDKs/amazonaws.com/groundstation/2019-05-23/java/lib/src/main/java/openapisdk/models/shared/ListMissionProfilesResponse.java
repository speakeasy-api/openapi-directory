package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMissionProfilesResponse
 * <p/>
**/
public class ListMissionProfilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missionProfileList")
    public MissionProfileListItem[] missionProfileList;
    public ListMissionProfilesResponse withMissionProfileList(MissionProfileListItem[] missionProfileList) {
        this.missionProfileList = missionProfileList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListMissionProfilesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}