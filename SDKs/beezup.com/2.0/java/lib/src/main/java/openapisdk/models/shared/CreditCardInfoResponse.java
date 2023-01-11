package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreditCardInfoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditCardInfo")
    public Object creditCardInfo;
    public CreditCardInfoResponse withCreditCardInfo(Object creditCardInfo) {
        this.creditCardInfo = creditCardInfo;
        return this;
    }
    @JsonProperty("currentPaymentMethod")
    public PaymentMethodEnum currentPaymentMethod;
    public CreditCardInfoResponse withCurrentPaymentMethod(PaymentMethodEnum currentPaymentMethod) {
        this.currentPaymentMethod = currentPaymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public BeezUpCommonInfoSummaries info;
    public CreditCardInfoResponse withInfo(BeezUpCommonInfoSummaries info) {
        this.info = info;
        return this;
    }
    @JsonProperty("links")
    public CreditCardInfoResponseLinks links;
    public CreditCardInfoResponse withLinks(CreditCardInfoResponseLinks links) {
        this.links = links;
        return this;
    }
}