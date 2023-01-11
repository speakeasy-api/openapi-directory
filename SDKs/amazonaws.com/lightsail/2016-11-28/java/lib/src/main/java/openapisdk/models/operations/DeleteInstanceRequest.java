package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInstanceRequest {
    public DeleteInstanceHeaders headers;
    public DeleteInstanceRequest withHeaders(DeleteInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteInstanceRequest request;
    public DeleteInstanceRequest withRequest(openapisdk.models.shared.DeleteInstanceRequest request) {
        this.request = request;
        return this;
    }
}