package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSchemaRequest {
    public CreateSchemaHeaders headers;
    public CreateSchemaRequest withHeaders(CreateSchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSchemaRequestBody request;
    public CreateSchemaRequest withRequest(CreateSchemaRequestBody request) {
        this.request = request;
        return this;
    }
}