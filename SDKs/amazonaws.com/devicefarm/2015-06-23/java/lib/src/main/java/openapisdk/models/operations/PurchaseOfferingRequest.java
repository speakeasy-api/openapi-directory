package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PurchaseOfferingRequest {
    public PurchaseOfferingHeaders headers;
    public PurchaseOfferingRequest withHeaders(PurchaseOfferingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PurchaseOfferingRequest request;
    public PurchaseOfferingRequest withRequest(openapisdk.models.shared.PurchaseOfferingRequest request) {
        this.request = request;
        return this;
    }
}