package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveOrderInvoiceDesignSettingsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderInvoiceDesignSettings request;
    public SaveOrderInvoiceDesignSettingsRequest withRequest(openapisdk.models.shared.OrderInvoiceDesignSettings request) {
        this.request = request;
        return this;
    }
}