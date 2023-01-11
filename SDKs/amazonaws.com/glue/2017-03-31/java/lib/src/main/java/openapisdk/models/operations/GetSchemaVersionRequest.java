package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchemaVersionRequest {
    public GetSchemaVersionHeaders headers;
    public GetSchemaVersionRequest withHeaders(GetSchemaVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSchemaVersionInput request;
    public GetSchemaVersionRequest withRequest(openapisdk.models.shared.GetSchemaVersionInput request) {
        this.request = request;
        return this;
    }
}