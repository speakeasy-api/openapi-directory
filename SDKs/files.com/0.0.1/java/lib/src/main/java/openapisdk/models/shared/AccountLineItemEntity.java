package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AccountLineItemEntity
 * List Payments
**/
public class AccountLineItemEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public AccountLineItemEntity withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Double balance;
    public AccountLineItemEntity withBalance(Double balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public AccountLineItemEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public AccountLineItemEntity withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_uri")
    public String downloadUri;
    public AccountLineItemEntity withDownloadUri(String downloadUri) {
        this.downloadUri = downloadUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public AccountLineItemEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_line_items")
    public InvoiceLineItemEntity invoiceLineItems;
    public AccountLineItemEntity withInvoiceLineItems(InvoiceLineItemEntity invoiceLineItems) {
        this.invoiceLineItems = invoiceLineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public AccountLineItemEntity withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_line_items")
    public PaymentLineItemEntity paymentLineItems;
    public AccountLineItemEntity withPaymentLineItems(PaymentLineItemEntity paymentLineItems) {
        this.paymentLineItems = paymentLineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("payment_reversed_at")
    public OffsetDateTime paymentReversedAt;
    public AccountLineItemEntity withPaymentReversedAt(OffsetDateTime paymentReversedAt) {
        this.paymentReversedAt = paymentReversedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_type")
    public String paymentType;
    public AccountLineItemEntity withPaymentType(String paymentType) {
        this.paymentType = paymentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_name")
    public String siteName;
    public AccountLineItemEntity withSiteName(String siteName) {
        this.siteName = siteName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountLineItemEntity withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public AccountLineItemEntity withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}