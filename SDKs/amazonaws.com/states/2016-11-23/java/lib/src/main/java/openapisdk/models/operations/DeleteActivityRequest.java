package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteActivityRequest {
    public DeleteActivityHeaders headers;
    public DeleteActivityRequest withHeaders(DeleteActivityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteActivityInput request;
    public DeleteActivityRequest withRequest(openapisdk.models.shared.DeleteActivityInput request) {
        this.request = request;
        return this;
    }
}