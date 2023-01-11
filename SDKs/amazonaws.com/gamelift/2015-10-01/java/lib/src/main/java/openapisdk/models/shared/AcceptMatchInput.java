package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AcceptMatchInput
 * Represents the input for a request operation.
**/
public class AcceptMatchInput {
    @JsonProperty("AcceptanceType")
    public AcceptanceTypeEnum acceptanceType;
    public AcceptMatchInput withAcceptanceType(AcceptanceTypeEnum acceptanceType) {
        this.acceptanceType = acceptanceType;
        return this;
    }
    @JsonProperty("PlayerIds")
    public String[] playerIds;
    public AcceptMatchInput withPlayerIds(String[] playerIds) {
        this.playerIds = playerIds;
        return this;
    }
    @JsonProperty("TicketId")
    public String ticketId;
    public AcceptMatchInput withTicketId(String ticketId) {
        this.ticketId = ticketId;
        return this;
    }
}