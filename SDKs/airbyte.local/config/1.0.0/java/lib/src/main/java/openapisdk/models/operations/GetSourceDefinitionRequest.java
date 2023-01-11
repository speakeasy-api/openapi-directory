package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSourceDefinitionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceDefinitionIdRequestBody request;
    public GetSourceDefinitionRequest withRequest(openapisdk.models.shared.SourceDefinitionIdRequestBody request) {
        this.request = request;
        return this;
    }
}