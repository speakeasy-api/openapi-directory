package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServiceActionRequest {
    public DeleteServiceActionHeaders headers;
    public DeleteServiceActionRequest withHeaders(DeleteServiceActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteServiceActionInput request;
    public DeleteServiceActionRequest withRequest(openapisdk.models.shared.DeleteServiceActionInput request) {
        this.request = request;
        return this;
    }
}