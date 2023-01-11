package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationalDatabaseEventsRequest {
    public GetRelationalDatabaseEventsHeaders headers;
    public GetRelationalDatabaseEventsRequest withHeaders(GetRelationalDatabaseEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRelationalDatabaseEventsRequest request;
    public GetRelationalDatabaseEventsRequest withRequest(openapisdk.models.shared.GetRelationalDatabaseEventsRequest request) {
        this.request = request;
        return this;
    }
}