package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Program
 * This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program.
**/
public class Program {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticityVerification")
    public PostSaleAuthenticationProgram authenticityVerification;
    public Program withAuthenticityVerification(PostSaleAuthenticationProgram authenticityVerification) {
        this.authenticityVerification = authenticityVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentProgram")
    public EbayFulfillmentProgram fulfillmentProgram;
    public Program withFulfillmentProgram(EbayFulfillmentProgram fulfillmentProgram) {
        this.fulfillmentProgram = fulfillmentProgram;
        return this;
    }
}