package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrderRequestBody {
    @JsonProperty("LineItems")
    public openapisdk.models.shared.LineItemRequest[] lineItems;
    public CreateOrderRequestBody withLineItems(openapisdk.models.shared.LineItemRequest[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonProperty("OutpostIdentifier")
    public String outpostIdentifier;
    public CreateOrderRequestBody withOutpostIdentifier(String outpostIdentifier) {
        this.outpostIdentifier = outpostIdentifier;
        return this;
    }
    @JsonProperty("PaymentOption")
    public CreateOrderRequestBodyPaymentOptionEnum paymentOption;
    public CreateOrderRequestBody withPaymentOption(CreateOrderRequestBodyPaymentOptionEnum paymentOption) {
        this.paymentOption = paymentOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentTerm")
    public CreateOrderRequestBodyPaymentTermEnum paymentTerm;
    public CreateOrderRequestBody withPaymentTerm(CreateOrderRequestBodyPaymentTermEnum paymentTerm) {
        this.paymentTerm = paymentTerm;
        return this;
    }
}