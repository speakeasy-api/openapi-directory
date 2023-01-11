package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScheduledActionRequest {
    public DeleteScheduledActionHeaders headers;
    public DeleteScheduledActionRequest withHeaders(DeleteScheduledActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteScheduledActionRequest request;
    public DeleteScheduledActionRequest withRequest(openapisdk.models.shared.DeleteScheduledActionRequest request) {
        this.request = request;
        return this;
    }
}