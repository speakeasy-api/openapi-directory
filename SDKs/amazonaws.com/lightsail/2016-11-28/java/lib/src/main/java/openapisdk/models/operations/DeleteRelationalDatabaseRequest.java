package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRelationalDatabaseRequest {
    public DeleteRelationalDatabaseHeaders headers;
    public DeleteRelationalDatabaseRequest withHeaders(DeleteRelationalDatabaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRelationalDatabaseRequest request;
    public DeleteRelationalDatabaseRequest withRequest(openapisdk.models.shared.DeleteRelationalDatabaseRequest request) {
        this.request = request;
        return this;
    }
}