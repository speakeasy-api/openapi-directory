package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePlayerSessionInput
 * Represents the input for a request operation.
**/
public class CreatePlayerSessionInput {
    @JsonProperty("GameSessionId")
    public String gameSessionId;
    public CreatePlayerSessionInput withGameSessionId(String gameSessionId) {
        this.gameSessionId = gameSessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerData")
    public String playerData;
    public CreatePlayerSessionInput withPlayerData(String playerData) {
        this.playerData = playerData;
        return this;
    }
    @JsonProperty("PlayerId")
    public String playerId;
    public CreatePlayerSessionInput withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
}