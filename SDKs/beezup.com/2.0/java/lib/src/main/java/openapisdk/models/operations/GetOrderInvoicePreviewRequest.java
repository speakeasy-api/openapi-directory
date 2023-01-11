package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderInvoicePreviewRequest {
    public GetOrderInvoicePreviewPathParams pathParams;
    public GetOrderInvoicePreviewRequest withPathParams(GetOrderInvoicePreviewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOrderInvoicePreviewHeaders headers;
    public GetOrderInvoicePreviewRequest withHeaders(GetOrderInvoicePreviewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PreviewOrderInvoiceRequest request;
    public GetOrderInvoicePreviewRequest withRequest(openapisdk.models.shared.PreviewOrderInvoiceRequest request) {
        this.request = request;
        return this;
    }
}