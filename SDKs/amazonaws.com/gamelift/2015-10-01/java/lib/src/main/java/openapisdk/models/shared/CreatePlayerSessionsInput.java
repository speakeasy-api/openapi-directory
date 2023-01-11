package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePlayerSessionsInput
 * Represents the input for a request operation.
**/
public class CreatePlayerSessionsInput {
    @JsonProperty("GameSessionId")
    public String gameSessionId;
    public CreatePlayerSessionsInput withGameSessionId(String gameSessionId) {
        this.gameSessionId = gameSessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerDataMap")
    public java.util.Map<String, String> playerDataMap;
    public CreatePlayerSessionsInput withPlayerDataMap(java.util.Map<String, String> playerDataMap) {
        this.playerDataMap = playerDataMap;
        return this;
    }
    @JsonProperty("PlayerIds")
    public String[] playerIds;
    public CreatePlayerSessionsInput withPlayerIds(String[] playerIds) {
        this.playerIds = playerIds;
        return this;
    }
}