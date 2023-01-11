package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRelationalDatabaseParametersRequest {
    public UpdateRelationalDatabaseParametersHeaders headers;
    public UpdateRelationalDatabaseParametersRequest withHeaders(UpdateRelationalDatabaseParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRelationalDatabaseParametersRequest request;
    public UpdateRelationalDatabaseParametersRequest withRequest(openapisdk.models.shared.UpdateRelationalDatabaseParametersRequest request) {
        this.request = request;
        return this;
    }
}