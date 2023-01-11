package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationalDatabaseRequest {
    public GetRelationalDatabaseHeaders headers;
    public GetRelationalDatabaseRequest withHeaders(GetRelationalDatabaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRelationalDatabaseRequest request;
    public GetRelationalDatabaseRequest withRequest(openapisdk.models.shared.GetRelationalDatabaseRequest request) {
        this.request = request;
        return this;
    }
}