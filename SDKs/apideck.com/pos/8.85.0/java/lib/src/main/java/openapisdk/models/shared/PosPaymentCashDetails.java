package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PosPaymentCashDetails
 * Cash details for this payment
**/
public class PosPaymentCashDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Object amount;
    public PosPaymentCashDetails withAmount(Object amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charge_back_amount")
    public Object chargeBackAmount;
    public PosPaymentCashDetails withChargeBackAmount(Object chargeBackAmount) {
        this.chargeBackAmount = chargeBackAmount;
        return this;
    }
}