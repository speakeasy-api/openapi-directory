package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterSchemaVersionRequest {
    public RegisterSchemaVersionHeaders headers;
    public RegisterSchemaVersionRequest withHeaders(RegisterSchemaVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterSchemaVersionInput request;
    public RegisterSchemaVersionRequest withRequest(openapisdk.models.shared.RegisterSchemaVersionInput request) {
        this.request = request;
        return this;
    }
}