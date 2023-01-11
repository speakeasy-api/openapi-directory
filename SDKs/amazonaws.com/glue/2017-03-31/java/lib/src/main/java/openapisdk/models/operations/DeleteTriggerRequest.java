package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTriggerRequest {
    public DeleteTriggerHeaders headers;
    public DeleteTriggerRequest withHeaders(DeleteTriggerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTriggerRequest request;
    public DeleteTriggerRequest withRequest(openapisdk.models.shared.DeleteTriggerRequest request) {
        this.request = request;
        return this;
    }
}