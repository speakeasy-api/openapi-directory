package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReserveContactRequest {
    public ReserveContactHeaders headers;
    public ReserveContactRequest withHeaders(ReserveContactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReserveContactRequestBody request;
    public ReserveContactRequest withRequest(ReserveContactRequestBody request) {
        this.request = request;
        return this;
    }
}