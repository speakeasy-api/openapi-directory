package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSourceDefinitionSpecificationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceDefinitionIdRequestBody request;
    public GetSourceDefinitionSpecificationRequest withRequest(openapisdk.models.shared.SourceDefinitionIdRequestBody request) {
        this.request = request;
        return this;
    }
}