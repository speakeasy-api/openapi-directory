package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSchemaCreationRequest {
    public StartSchemaCreationPathParams pathParams;
    public StartSchemaCreationRequest withPathParams(StartSchemaCreationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StartSchemaCreationHeaders headers;
    public StartSchemaCreationRequest withHeaders(StartSchemaCreationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartSchemaCreationRequestBody request;
    public StartSchemaCreationRequest withRequest(StartSchemaCreationRequestBody request) {
        this.request = request;
        return this;
    }
}