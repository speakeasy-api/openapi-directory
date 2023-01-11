package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MatchItem
 * The Match group object.
**/
public class MatchItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MatchId")
    public String matchId;
    public MatchItem withMatchId(String matchId) {
        this.matchId = matchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProfileIds")
    public String[] profileIds;
    public MatchItem withProfileIds(String[] profileIds) {
        this.profileIds = profileIds;
        return this;
    }
}