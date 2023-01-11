package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContestPaymentDisputeRequest
 * This type is used by the request payload of the contestPaymentDispute method.
**/
public class ContestPaymentDisputeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnAddress")
    public ReturnAddress returnAddress;
    public ContestPaymentDisputeRequest withReturnAddress(ReturnAddress returnAddress) {
        this.returnAddress = returnAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public Integer revision;
    public ContestPaymentDisputeRequest withRevision(Integer revision) {
        this.revision = revision;
        return this;
    }
}