package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PosPaymentCardDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card")
    public PaymentCardInput card;
    public PosPaymentCardDetailsInput withCard(PaymentCardInput card) {
        this.card = card;
        return this;
    }
}