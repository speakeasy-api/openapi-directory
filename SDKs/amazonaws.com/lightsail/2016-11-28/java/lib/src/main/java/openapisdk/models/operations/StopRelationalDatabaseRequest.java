package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopRelationalDatabaseRequest {
    public StopRelationalDatabaseHeaders headers;
    public StopRelationalDatabaseRequest withHeaders(StopRelationalDatabaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopRelationalDatabaseRequest request;
    public StopRelationalDatabaseRequest withRequest(openapisdk.models.shared.StopRelationalDatabaseRequest request) {
        this.request = request;
        return this;
    }
}