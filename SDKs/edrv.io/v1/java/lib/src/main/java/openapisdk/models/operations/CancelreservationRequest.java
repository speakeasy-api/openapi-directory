package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelreservationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CancelreservationRequestBody request;
    public CancelreservationRequest withRequest(CancelreservationRequestBody request) {
        this.request = request;
        return this;
    }
}