package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PurchaseOfferingResult
 * The result of the purchase offering (for example, success or failure).
**/
public class PurchaseOfferingResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringTransaction")
    public OfferingTransaction offeringTransaction;
    public PurchaseOfferingResult withOfferingTransaction(OfferingTransaction offeringTransaction) {
        this.offeringTransaction = offeringTransaction;
        return this;
    }
}