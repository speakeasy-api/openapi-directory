package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveOrderInvoiceGeneralSettingsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderInvoiceGeneralSettings request;
    public SaveOrderInvoiceGeneralSettingsRequest withRequest(openapisdk.models.shared.OrderInvoiceGeneralSettings request) {
        this.request = request;
        return this;
    }
}