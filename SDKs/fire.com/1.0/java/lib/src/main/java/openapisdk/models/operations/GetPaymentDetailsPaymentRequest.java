package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetPaymentDetailsPaymentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalFields")
    public String additionalFields;
    public GetPaymentDetailsPaymentRequest withAdditionalFields(String additionalFields) {
        this.additionalFields = additionalFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public GetPaymentDetailsPaymentRequest withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectFields")
    public String collectFields;
    public GetPaymentDetailsPaymentRequest withCollectFields(String collectFields) {
        this.collectFields = collectFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency;
    public GetPaymentDetailsPaymentRequest withCurrency(openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetPaymentDetailsPaymentRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiry")
    public OffsetDateTime expiry;
    public GetPaymentDetailsPaymentRequest withExpiry(OffsetDateTime expiry) {
        this.expiry = expiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icanTo")
    public Long icanTo;
    public GetPaymentDetailsPaymentRequest withIcanTo(Long icanTo) {
        this.icanTo = icanTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandatoryFields")
    public String mandatoryFields;
    public GetPaymentDetailsPaymentRequest withMandatoryFields(String mandatoryFields) {
        this.mandatoryFields = mandatoryFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxNumberPayments")
    public Long maxNumberPayments;
    public GetPaymentDetailsPaymentRequest withMaxNumberPayments(Long maxNumberPayments) {
        this.maxNumberPayments = maxNumberPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("myRef")
    public String myRef;
    public GetPaymentDetailsPaymentRequest withMyRef(String myRef) {
        this.myRef = myRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderDetails")
    public openapisdk.models.shared.OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails orderDetails;
    public GetPaymentDetailsPaymentRequest withOrderDetails(openapisdk.models.shared.OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails orderDetails) {
        this.orderDetails = orderDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentRequestCode")
    public String paymentRequestCode;
    public GetPaymentDetailsPaymentRequest withPaymentRequestCode(String paymentRequestCode) {
        this.paymentRequestCode = paymentRequestCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentUuid")
    public String paymentUuid;
    public GetPaymentDetailsPaymentRequest withPaymentUuid(String paymentUuid) {
        this.paymentUuid = paymentUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnUrl")
    public String returnUrl;
    public GetPaymentDetailsPaymentRequest withReturnUrl(String returnUrl) {
        this.returnUrl = returnUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetPaymentDetailsPaymentRequestStatusEnum status;
    public GetPaymentDetailsPaymentRequest withStatus(GetPaymentDetailsPaymentRequestStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionType")
    public GetPaymentDetailsPaymentRequestTransactionTypeEnum transactionType;
    public GetPaymentDetailsPaymentRequest withTransactionType(GetPaymentDetailsPaymentRequestTransactionTypeEnum transactionType) {
        this.transactionType = transactionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetPaymentDetailsPaymentRequestTypeEnum type;
    public GetPaymentDetailsPaymentRequest withType(GetPaymentDetailsPaymentRequestTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookUrl")
    public String webhookUrl;
    public GetPaymentDetailsPaymentRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}