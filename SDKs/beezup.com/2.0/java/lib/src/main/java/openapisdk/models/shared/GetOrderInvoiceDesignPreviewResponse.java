package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetOrderInvoiceDesignPreviewResponse {
    @JsonProperty("invoiceHtmlContent")
    public String invoiceHtmlContent;
    public GetOrderInvoiceDesignPreviewResponse withInvoiceHtmlContent(String invoiceHtmlContent) {
        this.invoiceHtmlContent = invoiceHtmlContent;
        return this;
    }
}