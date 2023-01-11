package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PreviewOrderInvoiceResponse {
    @JsonProperty("invoiceHtmlContent")
    public String invoiceHtmlContent;
    public PreviewOrderInvoiceResponse withInvoiceHtmlContent(String invoiceHtmlContent) {
        this.invoiceHtmlContent = invoiceHtmlContent;
        return this;
    }
}