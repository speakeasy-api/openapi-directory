package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTriggerRequest {
    public StartTriggerHeaders headers;
    public StartTriggerRequest withHeaders(StartTriggerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartTriggerRequest request;
    public StartTriggerRequest withRequest(openapisdk.models.shared.StartTriggerRequest request) {
        this.request = request;
        return this;
    }
}