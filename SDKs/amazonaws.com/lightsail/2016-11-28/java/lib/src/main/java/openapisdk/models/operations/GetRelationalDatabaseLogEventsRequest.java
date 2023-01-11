package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationalDatabaseLogEventsRequest {
    public GetRelationalDatabaseLogEventsHeaders headers;
    public GetRelationalDatabaseLogEventsRequest withHeaders(GetRelationalDatabaseLogEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRelationalDatabaseLogEventsRequest request;
    public GetRelationalDatabaseLogEventsRequest withRequest(openapisdk.models.shared.GetRelationalDatabaseLogEventsRequest request) {
        this.request = request;
        return this;
    }
}