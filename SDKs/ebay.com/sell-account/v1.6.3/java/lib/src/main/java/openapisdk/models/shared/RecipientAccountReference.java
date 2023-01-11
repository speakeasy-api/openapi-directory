package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecipientAccountReference
 * Recipient account information, like PayPal email. If the payment method is PayPal, this structure contains the recipient's PayPal email address.
**/
public class RecipientAccountReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceId")
    public String referenceId;
    public RecipientAccountReference withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceType")
    public String referenceType;
    public RecipientAccountReference withReferenceType(String referenceType) {
        this.referenceType = referenceType;
        return this;
    }
}