package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartMatchmakingOutput
 * Represents the returned data in response to a request operation.
**/
public class StartMatchmakingOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MatchmakingTicket")
    public MatchmakingTicket matchmakingTicket;
    public StartMatchmakingOutput withMatchmakingTicket(MatchmakingTicket matchmakingTicket) {
        this.matchmakingTicket = matchmakingTicket;
        return this;
    }
}