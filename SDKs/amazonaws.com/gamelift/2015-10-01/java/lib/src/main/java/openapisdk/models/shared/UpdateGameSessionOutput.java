package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateGameSessionOutput
 * Represents the returned data in response to a request operation.
**/
public class UpdateGameSessionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSession")
    public GameSession gameSession;
    public UpdateGameSessionOutput withGameSession(GameSession gameSession) {
        this.gameSession = gameSession;
        return this;
    }
}