package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationalDatabaseLogStreamsRequest {
    public GetRelationalDatabaseLogStreamsHeaders headers;
    public GetRelationalDatabaseLogStreamsRequest withHeaders(GetRelationalDatabaseLogStreamsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRelationalDatabaseLogStreamsRequest request;
    public GetRelationalDatabaseLogStreamsRequest withRequest(openapisdk.models.shared.GetRelationalDatabaseLogStreamsRequest request) {
        this.request = request;
        return this;
    }
}