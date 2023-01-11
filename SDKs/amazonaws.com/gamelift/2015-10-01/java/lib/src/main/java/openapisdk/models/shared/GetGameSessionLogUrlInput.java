package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetGameSessionLogUrlInput
 * Represents the input for a request operation.
**/
public class GetGameSessionLogUrlInput {
    @JsonProperty("GameSessionId")
    public String gameSessionId;
    public GetGameSessionLogUrlInput withGameSessionId(String gameSessionId) {
        this.gameSessionId = gameSessionId;
        return this;
    }
}