package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderInvoiceDesignSettingsPreviewRequest {
    public GetOrderInvoiceDesignSettingsPreviewHeaders headers;
    public GetOrderInvoiceDesignSettingsPreviewRequest withHeaders(GetOrderInvoiceDesignSettingsPreviewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderInvoiceDesignSettings request;
    public GetOrderInvoiceDesignSettingsPreviewRequest withRequest(openapisdk.models.shared.OrderInvoiceDesignSettings request) {
        this.request = request;
        return this;
    }
}