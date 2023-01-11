package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MatchedPlayerSession
 * <p>Represents a new player session that is created as a result of a successful FlexMatch match. A successful match automatically creates new player sessions for every player ID in the original matchmaking request. </p> <p>When players connect to the match's game session, they must include both player ID and player session ID in order to claim their assigned player slot.</p>
**/
public class MatchedPlayerSession {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerId")
    public String playerId;
    public MatchedPlayerSession withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerSessionId")
    public String playerSessionId;
    public MatchedPlayerSession withPlayerSessionId(String playerSessionId) {
        this.playerSessionId = playerSessionId;
        return this;
    }
}