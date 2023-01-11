package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartRelationalDatabaseRequest {
    public StartRelationalDatabaseHeaders headers;
    public StartRelationalDatabaseRequest withHeaders(StartRelationalDatabaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartRelationalDatabaseRequest request;
    public StartRelationalDatabaseRequest withRequest(openapisdk.models.shared.StartRelationalDatabaseRequest request) {
        this.request = request;
        return this;
    }
}