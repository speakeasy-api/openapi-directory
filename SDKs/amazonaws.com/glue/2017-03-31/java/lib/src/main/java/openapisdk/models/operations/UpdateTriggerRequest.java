package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTriggerRequest {
    public UpdateTriggerHeaders headers;
    public UpdateTriggerRequest withHeaders(UpdateTriggerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTriggerRequest request;
    public UpdateTriggerRequest withRequest(openapisdk.models.shared.UpdateTriggerRequest request) {
        this.request = request;
        return this;
    }
}