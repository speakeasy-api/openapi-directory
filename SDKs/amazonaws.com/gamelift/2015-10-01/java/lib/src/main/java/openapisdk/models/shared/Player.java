package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Player
 * Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed.
**/
public class Player {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatencyInMs")
    public java.util.Map<String, Long> latencyInMs;
    public Player withLatencyInMs(java.util.Map<String, Long> latencyInMs) {
        this.latencyInMs = latencyInMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerAttributes")
    public java.util.Map<String, AttributeValue> playerAttributes;
    public Player withPlayerAttributes(java.util.Map<String, AttributeValue> playerAttributes) {
        this.playerAttributes = playerAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerId")
    public String playerId;
    public Player withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Team")
    public String team;
    public Player withTeam(String team) {
        this.team = team;
        return this;
    }
}