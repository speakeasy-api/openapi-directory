package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PosPaymentCardDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card")
    public PaymentCard card;
    public PosPaymentCardDetails withCard(PaymentCard card) {
        this.card = card;
        return this;
    }
}