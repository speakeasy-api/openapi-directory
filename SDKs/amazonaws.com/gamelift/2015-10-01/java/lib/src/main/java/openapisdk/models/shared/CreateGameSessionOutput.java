package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateGameSessionOutput
 * Represents the returned data in response to a request operation.
**/
public class CreateGameSessionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSession")
    public GameSession gameSession;
    public CreateGameSessionOutput withGameSession(GameSession gameSession) {
        this.gameSession = gameSession;
        return this;
    }
}