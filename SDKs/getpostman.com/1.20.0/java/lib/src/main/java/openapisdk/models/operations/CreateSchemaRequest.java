package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSchemaRequest {
    public CreateSchemaPathParams pathParams;
    public CreateSchemaRequest withPathParams(CreateSchemaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSchemaRequestBody request;
    public CreateSchemaRequest withRequest(CreateSchemaRequestBody request) {
        this.request = request;
        return this;
    }
}