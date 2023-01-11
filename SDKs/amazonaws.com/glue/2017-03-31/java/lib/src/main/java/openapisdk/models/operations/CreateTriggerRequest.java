package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTriggerRequest {
    public CreateTriggerHeaders headers;
    public CreateTriggerRequest withHeaders(CreateTriggerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTriggerRequest request;
    public CreateTriggerRequest withRequest(openapisdk.models.shared.CreateTriggerRequest request) {
        this.request = request;
        return this;
    }
}