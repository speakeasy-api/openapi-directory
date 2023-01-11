package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateGameSessionQueueOutput
 * Represents the returned data in response to a request operation.
**/
public class UpdateGameSessionQueueOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionQueue")
    public GameSessionQueue gameSessionQueue;
    public UpdateGameSessionQueueOutput withGameSessionQueue(GameSessionQueue gameSessionQueue) {
        this.gameSessionQueue = gameSessionQueue;
        return this;
    }
}