package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationalDatabaseParametersRequest {
    public GetRelationalDatabaseParametersHeaders headers;
    public GetRelationalDatabaseParametersRequest withHeaders(GetRelationalDatabaseParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRelationalDatabaseParametersRequest request;
    public GetRelationalDatabaseParametersRequest withRequest(openapisdk.models.shared.GetRelationalDatabaseParametersRequest request) {
        this.request = request;
        return this;
    }
}