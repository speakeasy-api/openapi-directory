package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Document
 * Document object representing your invoice.
**/
public class Document {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block_id")
    public Long blockId;
    public Document withBlockId(Long blockId) {
        this.blockId = blockId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelled")
    public Boolean cancelled;
    public Document withCancelled(Boolean cancelled) {
        this.cancelled = cancelled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public Document withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversion_rate")
    public Float conversionRate;
    public Document withConversionRate(Float conversionRate) {
        this.conversionRate = conversionRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public Document withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_date")
    public LocalDate dueDate;
    public Document withDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("electronic")
    public Boolean electronic;
    public Document withElectronic(Boolean electronic) {
        this.electronic = electronic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillment_date")
    public LocalDate fulfillmentDate;
    public Document withFulfillmentDate(LocalDate fulfillmentDate) {
        this.fulfillmentDate = fulfillmentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gross_total")
    public Float grossTotal;
    public Document withGrossTotal(Float grossTotal) {
        this.grossTotal = grossTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Document withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_date")
    public LocalDate invoiceDate;
    public Document withInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_number")
    public String invoiceNumber;
    public Document withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public DocumentItem[] items;
    public Document withItems(DocumentItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public DocumentLanguageEnum language;
    public Document withLanguage(DocumentLanguageEnum language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification_status")
    public DocumentNotificationStatusEnum notificationStatus;
    public Document withNotificationStatus(DocumentNotificationStatusEnum notificationStatus) {
        this.notificationStatus = notificationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public DocumentOrganization organization;
    public Document withOrganization(DocumentOrganization organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paid_date")
    public LocalDate paidDate;
    public Document withPaidDate(LocalDate paidDate) {
        this.paidDate = paidDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partner")
    public Partner partner;
    public Document withPartner(Partner partner) {
        this.partner = partner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_method")
    public PaymentMethodEnum paymentMethod;
    public Document withPaymentMethod(PaymentMethodEnum paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_status")
    public PaymentStatusEnum paymentStatus;
    public Document withPaymentStatus(PaymentStatusEnum paymentStatus) {
        this.paymentStatus = paymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public DocumentSettings settings;
    public Document withSettings(DocumentSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public DocumentSummary summary;
    public Document withSummary(DocumentSummary summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Document withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DocumentTypeEnum type;
    public Document withType(DocumentTypeEnum type) {
        this.type = type;
        return this;
    }
}