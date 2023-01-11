package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatabaseRequest {
    public UpdateDatabaseHeaders headers;
    public UpdateDatabaseRequest withHeaders(UpdateDatabaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDatabaseRequest request;
    public UpdateDatabaseRequest withRequest(openapisdk.models.shared.UpdateDatabaseRequest request) {
        this.request = request;
        return this;
    }
}