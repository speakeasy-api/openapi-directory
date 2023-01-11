package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopTriggerRequest {
    public StopTriggerHeaders headers;
    public StopTriggerRequest withHeaders(StopTriggerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopTriggerRequest request;
    public StopTriggerRequest withRequest(openapisdk.models.shared.StopTriggerRequest request) {
        this.request = request;
        return this;
    }
}