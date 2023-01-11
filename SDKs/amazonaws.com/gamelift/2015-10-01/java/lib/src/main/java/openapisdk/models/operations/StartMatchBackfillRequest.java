package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartMatchBackfillRequest {
    public StartMatchBackfillHeaders headers;
    public StartMatchBackfillRequest withHeaders(StartMatchBackfillHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartMatchBackfillInput request;
    public StartMatchBackfillRequest withRequest(openapisdk.models.shared.StartMatchBackfillInput request) {
        this.request = request;
        return this;
    }
}