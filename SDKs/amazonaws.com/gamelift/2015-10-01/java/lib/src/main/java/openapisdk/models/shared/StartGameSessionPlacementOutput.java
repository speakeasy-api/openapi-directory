package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartGameSessionPlacementOutput
 * Represents the returned data in response to a request operation.
**/
public class StartGameSessionPlacementOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionPlacement")
    public GameSessionPlacement gameSessionPlacement;
    public StartGameSessionPlacementOutput withGameSessionPlacement(GameSessionPlacement gameSessionPlacement) {
        this.gameSessionPlacement = gameSessionPlacement;
        return this;
    }
}