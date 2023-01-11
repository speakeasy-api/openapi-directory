package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutQueryDefinitionRequest {
    public PutQueryDefinitionHeaders headers;
    public PutQueryDefinitionRequest withHeaders(PutQueryDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutQueryDefinitionRequest request;
    public PutQueryDefinitionRequest withRequest(openapisdk.models.shared.PutQueryDefinitionRequest request) {
        this.request = request;
        return this;
    }
}