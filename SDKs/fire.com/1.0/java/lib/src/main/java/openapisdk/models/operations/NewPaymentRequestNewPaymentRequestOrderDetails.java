package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NewPaymentRequestNewPaymentRequestOrderDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment1")
    public String comment1;
    public NewPaymentRequestNewPaymentRequestOrderDetails withComment1(String comment1) {
        this.comment1 = comment1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment2")
    public String comment2;
    public NewPaymentRequestNewPaymentRequestOrderDetails withComment2(String comment2) {
        this.comment2 = comment2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerNumber")
    public String customerNumber;
    public NewPaymentRequestNewPaymentRequestOrderDetails withCustomerNumber(String customerNumber) {
        this.customerNumber = customerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryAddressLine1")
    public String deliveryAddressLine1;
    public NewPaymentRequestNewPaymentRequestOrderDetails withDeliveryAddressLine1(String deliveryAddressLine1) {
        this.deliveryAddressLine1 = deliveryAddressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryAddressLine2")
    public String deliveryAddressLine2;
    public NewPaymentRequestNewPaymentRequestOrderDetails withDeliveryAddressLine2(String deliveryAddressLine2) {
        this.deliveryAddressLine2 = deliveryAddressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryCity")
    public String deliveryCity;
    public NewPaymentRequestNewPaymentRequestOrderDetails withDeliveryCity(String deliveryCity) {
        this.deliveryCity = deliveryCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryCountry")
    public String deliveryCountry;
    public NewPaymentRequestNewPaymentRequestOrderDetails withDeliveryCountry(String deliveryCountry) {
        this.deliveryCountry = deliveryCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryPostCode")
    public String deliveryPostCode;
    public NewPaymentRequestNewPaymentRequestOrderDetails withDeliveryPostCode(String deliveryPostCode) {
        this.deliveryPostCode = deliveryPostCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantCustomerIdentification")
    public String merchantCustomerIdentification;
    public NewPaymentRequestNewPaymentRequestOrderDetails withMerchantCustomerIdentification(String merchantCustomerIdentification) {
        this.merchantCustomerIdentification = merchantCustomerIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNumber")
    public String merchantNumber;
    public NewPaymentRequestNewPaymentRequestOrderDetails withMerchantNumber(String merchantNumber) {
        this.merchantNumber = merchantNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public NewPaymentRequestNewPaymentRequestOrderDetails withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public NewPaymentRequestNewPaymentRequestOrderDetails withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variableReference")
    public String variableReference;
    public NewPaymentRequestNewPaymentRequestOrderDetails withVariableReference(String variableReference) {
        this.variableReference = variableReference;
        return this;
    }
}