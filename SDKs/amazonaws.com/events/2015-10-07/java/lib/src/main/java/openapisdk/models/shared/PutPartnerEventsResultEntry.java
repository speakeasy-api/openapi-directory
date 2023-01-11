package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutPartnerEventsResultEntry
 * Represents an event that a partner tried to generate, but failed.
**/
public class PutPartnerEventsResultEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public PutPartnerEventsResultEntry withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public PutPartnerEventsResultEntry withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventId")
    public String eventId;
    public PutPartnerEventsResultEntry withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
}