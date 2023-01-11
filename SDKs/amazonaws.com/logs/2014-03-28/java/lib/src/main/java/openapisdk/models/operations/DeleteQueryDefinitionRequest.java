package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQueryDefinitionRequest {
    public DeleteQueryDefinitionHeaders headers;
    public DeleteQueryDefinitionRequest withHeaders(DeleteQueryDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteQueryDefinitionRequest request;
    public DeleteQueryDefinitionRequest withRequest(openapisdk.models.shared.DeleteQueryDefinitionRequest request) {
        this.request = request;
        return this;
    }
}