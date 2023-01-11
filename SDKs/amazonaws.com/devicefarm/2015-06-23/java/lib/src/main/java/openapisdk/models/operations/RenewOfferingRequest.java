package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RenewOfferingRequest {
    public RenewOfferingHeaders headers;
    public RenewOfferingRequest withHeaders(RenewOfferingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RenewOfferingRequest request;
    public RenewOfferingRequest withRequest(openapisdk.models.shared.RenewOfferingRequest request) {
        this.request = request;
        return this;
    }
}