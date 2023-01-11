package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopRunRequest {
    public StopRunHeaders headers;
    public StopRunRequest withHeaders(StopRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopRunRequest request;
    public StopRunRequest withRequest(openapisdk.models.shared.StopRunRequest request) {
        this.request = request;
        return this;
    }
}