package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomActionTypeRequest {
    public DeleteCustomActionTypeHeaders headers;
    public DeleteCustomActionTypeRequest withHeaders(DeleteCustomActionTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCustomActionTypeInput request;
    public DeleteCustomActionTypeRequest withRequest(openapisdk.models.shared.DeleteCustomActionTypeInput request) {
        this.request = request;
        return this;
    }
}