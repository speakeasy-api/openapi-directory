package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchemaByDefinitionRequest {
    public GetSchemaByDefinitionHeaders headers;
    public GetSchemaByDefinitionRequest withHeaders(GetSchemaByDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSchemaByDefinitionInput request;
    public GetSchemaByDefinitionRequest withRequest(openapisdk.models.shared.GetSchemaByDefinitionInput request) {
        this.request = request;
        return this;
    }
}