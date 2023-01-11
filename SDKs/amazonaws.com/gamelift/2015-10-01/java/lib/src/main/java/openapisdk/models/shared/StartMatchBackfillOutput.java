package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartMatchBackfillOutput
 * Represents the returned data in response to a request operation.
**/
public class StartMatchBackfillOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MatchmakingTicket")
    public MatchmakingTicket matchmakingTicket;
    public StartMatchBackfillOutput withMatchmakingTicket(MatchmakingTicket matchmakingTicket) {
        this.matchmakingTicket = matchmakingTicket;
        return this;
    }
}