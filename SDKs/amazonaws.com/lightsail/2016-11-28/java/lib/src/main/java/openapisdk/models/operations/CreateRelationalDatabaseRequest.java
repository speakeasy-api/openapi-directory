package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRelationalDatabaseRequest {
    public CreateRelationalDatabaseHeaders headers;
    public CreateRelationalDatabaseRequest withHeaders(CreateRelationalDatabaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRelationalDatabaseRequest request;
    public CreateRelationalDatabaseRequest withRequest(openapisdk.models.shared.CreateRelationalDatabaseRequest request) {
        this.request = request;
        return this;
    }
}