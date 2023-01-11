package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDatabaseRequest {
    public DeleteDatabaseHeaders headers;
    public DeleteDatabaseRequest withHeaders(DeleteDatabaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDatabaseRequest request;
    public DeleteDatabaseRequest withRequest(openapisdk.models.shared.DeleteDatabaseRequest request) {
        this.request = request;
        return this;
    }
}