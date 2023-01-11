package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RenewOfferingResult
 * The result of a renewal offering.
**/
public class RenewOfferingResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringTransaction")
    public OfferingTransaction offeringTransaction;
    public RenewOfferingResult withOfferingTransaction(OfferingTransaction offeringTransaction) {
        this.offeringTransaction = offeringTransaction;
        return this;
    }
}