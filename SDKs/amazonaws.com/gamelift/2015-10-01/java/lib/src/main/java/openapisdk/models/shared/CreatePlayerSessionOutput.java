package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePlayerSessionOutput
 * Represents the returned data in response to a request operation.
**/
public class CreatePlayerSessionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerSession")
    public PlayerSession playerSession;
    public CreatePlayerSessionOutput withPlayerSession(PlayerSession playerSession) {
        this.playerSession = playerSession;
        return this;
    }
}