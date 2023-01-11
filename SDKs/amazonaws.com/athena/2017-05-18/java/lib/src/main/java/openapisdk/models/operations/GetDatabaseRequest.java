package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatabaseRequest {
    public GetDatabaseHeaders headers;
    public GetDatabaseRequest withHeaders(GetDatabaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDatabaseInput request;
    public GetDatabaseRequest withRequest(openapisdk.models.shared.GetDatabaseInput request) {
        this.request = request;
        return this;
    }
}