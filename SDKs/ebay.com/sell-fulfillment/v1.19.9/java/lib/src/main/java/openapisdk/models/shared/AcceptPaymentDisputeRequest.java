package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AcceptPaymentDisputeRequest
 * This type is used by base request of the acceptPaymentDispute method.
**/
public class AcceptPaymentDisputeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnAddress")
    public ReturnAddress returnAddress;
    public AcceptPaymentDisputeRequest withReturnAddress(ReturnAddress returnAddress) {
        this.returnAddress = returnAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public Integer revision;
    public AcceptPaymentDisputeRequest withRevision(Integer revision) {
        this.revision = revision;
        return this;
    }
}