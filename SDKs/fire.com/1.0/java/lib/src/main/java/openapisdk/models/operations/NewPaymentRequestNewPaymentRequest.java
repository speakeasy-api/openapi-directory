package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class NewPaymentRequestNewPaymentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalFields")
    public String additionalFields;
    public NewPaymentRequestNewPaymentRequest withAdditionalFields(String additionalFields) {
        this.additionalFields = additionalFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public NewPaymentRequestNewPaymentRequest withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectFields")
    public String collectFields;
    public NewPaymentRequestNewPaymentRequest withCollectFields(String collectFields) {
        this.collectFields = collectFields;
        return this;
    }
    @JsonProperty("currency")
    public NewPaymentRequestNewPaymentRequestCurrencyEnum currency;
    public NewPaymentRequestNewPaymentRequest withCurrency(NewPaymentRequestNewPaymentRequestCurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public NewPaymentRequestNewPaymentRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiry")
    public OffsetDateTime expiry;
    public NewPaymentRequestNewPaymentRequest withExpiry(OffsetDateTime expiry) {
        this.expiry = expiry;
        return this;
    }
    @JsonProperty("icanTo")
    public Long icanTo;
    public NewPaymentRequestNewPaymentRequest withIcanTo(Long icanTo) {
        this.icanTo = icanTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandatoryFields")
    public String mandatoryFields;
    public NewPaymentRequestNewPaymentRequest withMandatoryFields(String mandatoryFields) {
        this.mandatoryFields = mandatoryFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxNumberPayments")
    public Long maxNumberPayments;
    public NewPaymentRequestNewPaymentRequest withMaxNumberPayments(Long maxNumberPayments) {
        this.maxNumberPayments = maxNumberPayments;
        return this;
    }
    @JsonProperty("myRef")
    public String myRef;
    public NewPaymentRequestNewPaymentRequest withMyRef(String myRef) {
        this.myRef = myRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderDetails")
    public NewPaymentRequestNewPaymentRequestOrderDetails orderDetails;
    public NewPaymentRequestNewPaymentRequest withOrderDetails(NewPaymentRequestNewPaymentRequestOrderDetails orderDetails) {
        this.orderDetails = orderDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnUrl")
    public String returnUrl;
    public NewPaymentRequestNewPaymentRequest withReturnUrl(String returnUrl) {
        this.returnUrl = returnUrl;
        return this;
    }
    @JsonProperty("type")
    public NewPaymentRequestNewPaymentRequestTypeEnum type;
    public NewPaymentRequestNewPaymentRequest withType(NewPaymentRequestNewPaymentRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}