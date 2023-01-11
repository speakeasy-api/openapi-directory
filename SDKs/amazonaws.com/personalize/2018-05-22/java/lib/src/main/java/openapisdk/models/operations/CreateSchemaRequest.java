package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSchemaRequest {
    public CreateSchemaHeaders headers;
    public CreateSchemaRequest withHeaders(CreateSchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSchemaRequest request;
    public CreateSchemaRequest withRequest(openapisdk.models.shared.CreateSchemaRequest request) {
        this.request = request;
        return this;
    }
}