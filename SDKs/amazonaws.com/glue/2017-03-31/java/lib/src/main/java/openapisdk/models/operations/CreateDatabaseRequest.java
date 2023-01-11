package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDatabaseRequest {
    public CreateDatabaseHeaders headers;
    public CreateDatabaseRequest withHeaders(CreateDatabaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDatabaseRequest request;
    public CreateDatabaseRequest withRequest(openapisdk.models.shared.CreateDatabaseRequest request) {
        this.request = request;
        return this;
    }
}