package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePlayerSessionsOutput
 * Represents the returned data in response to a request operation.
**/
public class CreatePlayerSessionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerSessions")
    public PlayerSession[] playerSessions;
    public CreatePlayerSessionsOutput withPlayerSessions(PlayerSession[] playerSessions) {
        this.playerSessions = playerSessions;
        return this;
    }
}