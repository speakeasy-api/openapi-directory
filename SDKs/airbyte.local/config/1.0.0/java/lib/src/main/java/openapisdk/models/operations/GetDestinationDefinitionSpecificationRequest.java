package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDestinationDefinitionSpecificationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DestinationDefinitionIdRequestBody request;
    public GetDestinationDefinitionSpecificationRequest withRequest(openapisdk.models.shared.DestinationDefinitionIdRequestBody request) {
        this.request = request;
        return this;
    }
}