package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentMethod
 * Container specifying a payment method that is accepted by the seller. Specify multiple payment methods by repeating this container. For more on payment methods, see Accepted payments policy. Note that payment methods are not applicable to classified ad listings &ndash; all classified ad payments are handled off of the eBay platform.
**/
public class PaymentMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brands")
    public String[] brands;
    public PaymentMethod withBrands(String[] brands) {
        this.brands = brands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodType")
    public String paymentMethodType;
    public PaymentMethod withPaymentMethodType(String paymentMethodType) {
        this.paymentMethodType = paymentMethodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipientAccountReference")
    public RecipientAccountReference recipientAccountReference;
    public PaymentMethod withRecipientAccountReference(RecipientAccountReference recipientAccountReference) {
        this.recipientAccountReference = recipientAccountReference;
        return this;
    }
}