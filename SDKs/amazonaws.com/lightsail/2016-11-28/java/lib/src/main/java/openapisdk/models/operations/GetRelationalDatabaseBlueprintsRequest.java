package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationalDatabaseBlueprintsRequest {
    public GetRelationalDatabaseBlueprintsHeaders headers;
    public GetRelationalDatabaseBlueprintsRequest withHeaders(GetRelationalDatabaseBlueprintsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRelationalDatabaseBlueprintsRequest request;
    public GetRelationalDatabaseBlueprintsRequest withRequest(openapisdk.models.shared.GetRelationalDatabaseBlueprintsRequest request) {
        this.request = request;
        return this;
    }
}