package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateOrderInvoiceRequest {
    public GenerateOrderInvoicePathParams pathParams;
    public GenerateOrderInvoiceRequest withPathParams(GenerateOrderInvoicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GenerateOrderInvoiceQueryParams queryParams;
    public GenerateOrderInvoiceRequest withQueryParams(GenerateOrderInvoiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateOrderInvoiceRequest request;
    public GenerateOrderInvoiceRequest withRequest(openapisdk.models.shared.GenerateOrderInvoiceRequest request) {
        this.request = request;
        return this;
    }
}