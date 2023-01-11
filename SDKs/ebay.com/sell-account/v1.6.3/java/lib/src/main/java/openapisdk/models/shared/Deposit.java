package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Deposit
 * A container that describes the details of a deposit. Used only with motor listings.
**/
public class Deposit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Amount amount;
    public Deposit withAmount(Amount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueIn")
    public TimeDuration dueIn;
    public Deposit withDueIn(TimeDuration dueIn) {
        this.dueIn = dueIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethods")
    public PaymentMethod[] paymentMethods;
    public Deposit withPaymentMethods(PaymentMethod[] paymentMethods) {
        this.paymentMethods = paymentMethods;
        return this;
    }
}