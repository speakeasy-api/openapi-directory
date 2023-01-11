package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutScheduledActionRequest {
    public PutScheduledActionHeaders headers;
    public PutScheduledActionRequest withHeaders(PutScheduledActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutScheduledActionRequest request;
    public PutScheduledActionRequest withRequest(openapisdk.models.shared.PutScheduledActionRequest request) {
        this.request = request;
        return this;
    }
}