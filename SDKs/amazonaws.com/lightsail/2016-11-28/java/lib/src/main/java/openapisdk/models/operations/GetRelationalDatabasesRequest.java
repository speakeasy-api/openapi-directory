package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationalDatabasesRequest {
    public GetRelationalDatabasesHeaders headers;
    public GetRelationalDatabasesRequest withHeaders(GetRelationalDatabasesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRelationalDatabasesRequest request;
    public GetRelationalDatabasesRequest withRequest(openapisdk.models.shared.GetRelationalDatabasesRequest request) {
        this.request = request;
        return this;
    }
}