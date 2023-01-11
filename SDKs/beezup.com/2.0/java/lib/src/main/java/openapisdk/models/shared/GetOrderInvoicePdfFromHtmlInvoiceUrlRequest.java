package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetOrderInvoicePdfFromHtmlInvoiceUrlRequest {
    @JsonProperty("orderInvoiceUri")
    public String orderInvoiceUri;
    public GetOrderInvoicePdfFromHtmlInvoiceUrlRequest withOrderInvoiceUri(String orderInvoiceUri) {
        this.orderInvoiceUri = orderInvoiceUri;
        return this;
    }
}