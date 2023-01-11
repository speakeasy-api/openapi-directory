package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeMatchmakingInput
 * Represents the input for a request operation.
**/
public class DescribeMatchmakingInput {
    @JsonProperty("TicketIds")
    public String[] ticketIds;
    public DescribeMatchmakingInput withTicketIds(String[] ticketIds) {
        this.ticketIds = ticketIds;
        return this;
    }
}