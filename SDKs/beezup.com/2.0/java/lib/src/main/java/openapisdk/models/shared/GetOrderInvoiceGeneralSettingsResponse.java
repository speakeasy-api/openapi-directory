package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetOrderInvoiceGeneralSettingsResponse
 * Order Invoice General Settings
**/
public class GetOrderInvoiceGeneralSettingsResponse {
    @JsonProperty("cultureName")
    public String cultureName;
    public GetOrderInvoiceGeneralSettingsResponse withCultureName(String cultureName) {
        this.cultureName = cultureName;
        return this;
    }
    @JsonProperty("invoicePrefix")
    public String invoicePrefix;
    public GetOrderInvoiceGeneralSettingsResponse withInvoicePrefix(String invoicePrefix) {
        this.invoicePrefix = invoicePrefix;
        return this;
    }
    @JsonProperty("invoiceStartingSequenceNumber")
    public Long invoiceStartingSequenceNumber;
    public GetOrderInvoiceGeneralSettingsResponse withInvoiceStartingSequenceNumber(Long invoiceStartingSequenceNumber) {
        this.invoiceStartingSequenceNumber = invoiceStartingSequenceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastInvoiceSequenceNumber")
    public Long lastInvoiceSequenceNumber;
    public GetOrderInvoiceGeneralSettingsResponse withLastInvoiceSequenceNumber(Long lastInvoiceSequenceNumber) {
        this.lastInvoiceSequenceNumber = lastInvoiceSequenceNumber;
        return this;
    }
    @JsonProperty("productVATPercent")
    public Double productVATPercent;
    public GetOrderInvoiceGeneralSettingsResponse withProductVatPercent(Double productVATPercent) {
        this.productVATPercent = productVATPercent;
        return this;
    }
    @JsonProperty("shippingVATPercent")
    public Double shippingVATPercent;
    public GetOrderInvoiceGeneralSettingsResponse withShippingVatPercent(Double shippingVATPercent) {
        this.shippingVATPercent = shippingVATPercent;
        return this;
    }
}