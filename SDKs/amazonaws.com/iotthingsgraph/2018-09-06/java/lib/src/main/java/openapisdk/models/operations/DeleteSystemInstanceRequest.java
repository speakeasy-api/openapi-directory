package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSystemInstanceRequest {
    public DeleteSystemInstanceHeaders headers;
    public DeleteSystemInstanceRequest withHeaders(DeleteSystemInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSystemInstanceRequest request;
    public DeleteSystemInstanceRequest withRequest(openapisdk.models.shared.DeleteSystemInstanceRequest request) {
        this.request = request;
        return this;
    }
}