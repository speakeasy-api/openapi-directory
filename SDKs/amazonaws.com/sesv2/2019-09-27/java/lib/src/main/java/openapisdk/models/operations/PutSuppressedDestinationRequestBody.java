package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutSuppressedDestinationRequestBody {
    @JsonProperty("EmailAddress")
    public String emailAddress;
    public PutSuppressedDestinationRequestBody withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonProperty("Reason")
    public PutSuppressedDestinationRequestBodyReasonEnum reason;
    public PutSuppressedDestinationRequestBody withReason(PutSuppressedDestinationRequestBodyReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}