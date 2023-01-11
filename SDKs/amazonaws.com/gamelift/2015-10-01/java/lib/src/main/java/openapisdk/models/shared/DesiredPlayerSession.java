package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DesiredPlayerSession
 * Player information for use when creating player sessions using a game session placement request with <a>StartGameSessionPlacement</a>.
**/
public class DesiredPlayerSession {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerData")
    public String playerData;
    public DesiredPlayerSession withPlayerData(String playerData) {
        this.playerData = playerData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerId")
    public String playerId;
    public DesiredPlayerSession withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
}