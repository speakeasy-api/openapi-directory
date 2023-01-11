package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment1")
    public String comment1;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withComment1(String comment1) {
        this.comment1 = comment1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment2")
    public String comment2;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withComment2(String comment2) {
        this.comment2 = comment2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerNumber")
    public String customerNumber;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withCustomerNumber(String customerNumber) {
        this.customerNumber = customerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryAddressLine1")
    public String deliveryAddressLine1;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withDeliveryAddressLine1(String deliveryAddressLine1) {
        this.deliveryAddressLine1 = deliveryAddressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryAddressLine2")
    public String deliveryAddressLine2;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withDeliveryAddressLine2(String deliveryAddressLine2) {
        this.deliveryAddressLine2 = deliveryAddressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryCity")
    public String deliveryCity;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withDeliveryCity(String deliveryCity) {
        this.deliveryCity = deliveryCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryCountry")
    public String deliveryCountry;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withDeliveryCountry(String deliveryCountry) {
        this.deliveryCountry = deliveryCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryPostCode")
    public String deliveryPostCode;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withDeliveryPostCode(String deliveryPostCode) {
        this.deliveryPostCode = deliveryPostCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantCustomerIdentification")
    public String merchantCustomerIdentification;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withMerchantCustomerIdentification(String merchantCustomerIdentification) {
        this.merchantCustomerIdentification = merchantCustomerIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNumber")
    public String merchantNumber;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withMerchantNumber(String merchantNumber) {
        this.merchantNumber = merchantNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variableReference")
    public String variableReference;
    public OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails withVariableReference(String variableReference) {
        this.variableReference = variableReference;
        return this;
    }
}