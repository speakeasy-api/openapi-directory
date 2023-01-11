package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderInvoicePdfRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetOrderInvoicePdfFromHtmlInvoiceUrlRequest request;
    public GetOrderInvoicePdfRequest withRequest(openapisdk.models.shared.GetOrderInvoicePdfFromHtmlInvoiceUrlRequest request) {
        this.request = request;
        return this;
    }
}