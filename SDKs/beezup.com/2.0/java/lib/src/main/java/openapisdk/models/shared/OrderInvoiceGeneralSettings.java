package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OrderInvoiceGeneralSettings
 * Order Invoice General Settings
**/
public class OrderInvoiceGeneralSettings {
    @JsonProperty("cultureName")
    public String cultureName;
    public OrderInvoiceGeneralSettings withCultureName(String cultureName) {
        this.cultureName = cultureName;
        return this;
    }
    @JsonProperty("invoicePrefix")
    public String invoicePrefix;
    public OrderInvoiceGeneralSettings withInvoicePrefix(String invoicePrefix) {
        this.invoicePrefix = invoicePrefix;
        return this;
    }
    @JsonProperty("invoiceStartingSequenceNumber")
    public Long invoiceStartingSequenceNumber;
    public OrderInvoiceGeneralSettings withInvoiceStartingSequenceNumber(Long invoiceStartingSequenceNumber) {
        this.invoiceStartingSequenceNumber = invoiceStartingSequenceNumber;
        return this;
    }
    @JsonProperty("productVATPercent")
    public Double productVATPercent;
    public OrderInvoiceGeneralSettings withProductVatPercent(Double productVATPercent) {
        this.productVATPercent = productVATPercent;
        return this;
    }
    @JsonProperty("shippingVATPercent")
    public Double shippingVATPercent;
    public OrderInvoiceGeneralSettings withShippingVatPercent(Double shippingVATPercent) {
        this.shippingVATPercent = shippingVATPercent;
        return this;
    }
}