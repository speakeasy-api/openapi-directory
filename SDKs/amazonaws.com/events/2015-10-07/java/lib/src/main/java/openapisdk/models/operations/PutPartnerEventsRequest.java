package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPartnerEventsRequest {
    public PutPartnerEventsHeaders headers;
    public PutPartnerEventsRequest withHeaders(PutPartnerEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutPartnerEventsRequest request;
    public PutPartnerEventsRequest withRequest(openapisdk.models.shared.PutPartnerEventsRequest request) {
        this.request = request;
        return this;
    }
}