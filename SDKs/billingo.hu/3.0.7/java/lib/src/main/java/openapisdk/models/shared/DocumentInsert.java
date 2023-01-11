package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentInsert {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_account_id")
    public Long bankAccountId;
    public DocumentInsert withBankAccountId(Long bankAccountId) {
        this.bankAccountId = bankAccountId;
        return this;
    }
    @JsonProperty("block_id")
    public Long blockId;
    public DocumentInsert withBlockId(Long blockId) {
        this.blockId = blockId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public DocumentInsert withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversion_rate")
    public Float conversionRate;
    public DocumentInsert withConversionRate(Float conversionRate) {
        this.conversionRate = conversionRate;
        return this;
    }
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public DocumentInsert withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("due_date")
    public LocalDate dueDate;
    public DocumentInsert withDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("electronic")
    public Boolean electronic;
    public DocumentInsert withElectronic(Boolean electronic) {
        this.electronic = electronic;
        return this;
    }
    @JsonProperty("fulfillment_date")
    public LocalDate fulfillmentDate;
    public DocumentInsert withFulfillmentDate(LocalDate fulfillmentDate) {
        this.fulfillmentDate = fulfillmentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Object[] items;
    public DocumentInsert withItems(Object[] items) {
        this.items = items;
        return this;
    }
    @JsonProperty("language")
    public DocumentLanguageEnum language;
    public DocumentInsert withLanguage(DocumentLanguageEnum language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paid")
    public Boolean paid;
    public DocumentInsert withPaid(Boolean paid) {
        this.paid = paid;
        return this;
    }
    @JsonProperty("partner_id")
    public Long partnerId;
    public DocumentInsert withPartnerId(Long partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @JsonProperty("payment_method")
    public PaymentMethodEnum paymentMethod;
    public DocumentInsert withPaymentMethod(PaymentMethodEnum paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public DocumentSettings settings;
    public DocumentInsert withSettings(DocumentSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonProperty("type")
    public DocumentInsertTypeEnum type;
    public DocumentInsert withType(DocumentInsertTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor_id")
    public String vendorId;
    public DocumentInsert withVendorId(String vendorId) {
        this.vendorId = vendorId;
        return this;
    }
}