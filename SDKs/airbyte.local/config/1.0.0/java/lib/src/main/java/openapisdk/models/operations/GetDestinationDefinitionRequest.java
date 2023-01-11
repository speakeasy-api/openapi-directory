package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDestinationDefinitionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DestinationDefinitionIdRequestBody request;
    public GetDestinationDefinitionRequest withRequest(openapisdk.models.shared.DestinationDefinitionIdRequestBody request) {
        this.request = request;
        return this;
    }
}