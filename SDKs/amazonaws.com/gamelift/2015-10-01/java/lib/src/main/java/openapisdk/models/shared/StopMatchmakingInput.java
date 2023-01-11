package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StopMatchmakingInput
 * Represents the input for a request operation.
**/
public class StopMatchmakingInput {
    @JsonProperty("TicketId")
    public String ticketId;
    public StopMatchmakingInput withTicketId(String ticketId) {
        this.ticketId = ticketId;
        return this;
    }
}