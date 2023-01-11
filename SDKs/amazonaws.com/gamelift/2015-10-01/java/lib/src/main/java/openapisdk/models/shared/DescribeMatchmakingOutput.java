package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeMatchmakingOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeMatchmakingOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TicketList")
    public MatchmakingTicket[] ticketList;
    public DescribeMatchmakingOutput withTicketList(MatchmakingTicket[] ticketList) {
        this.ticketList = ticketList;
        return this;
    }
}