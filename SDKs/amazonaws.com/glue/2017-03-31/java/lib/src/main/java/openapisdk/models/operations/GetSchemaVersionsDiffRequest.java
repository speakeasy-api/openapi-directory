package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchemaVersionsDiffRequest {
    public GetSchemaVersionsDiffHeaders headers;
    public GetSchemaVersionsDiffRequest withHeaders(GetSchemaVersionsDiffHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSchemaVersionsDiffInput request;
    public GetSchemaVersionsDiffRequest withRequest(openapisdk.models.shared.GetSchemaVersionsDiffInput request) {
        this.request = request;
        return this;
    }
}