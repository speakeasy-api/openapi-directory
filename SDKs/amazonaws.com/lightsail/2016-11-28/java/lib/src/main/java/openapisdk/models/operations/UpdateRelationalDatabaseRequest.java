package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRelationalDatabaseRequest {
    public UpdateRelationalDatabaseHeaders headers;
    public UpdateRelationalDatabaseRequest withHeaders(UpdateRelationalDatabaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRelationalDatabaseRequest request;
    public UpdateRelationalDatabaseRequest withRequest(openapisdk.models.shared.UpdateRelationalDatabaseRequest request) {
        this.request = request;
        return this;
    }
}