package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDestinationDefinitionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DestinationDefinitionCreate request;
    public CreateDestinationDefinitionRequest withRequest(openapisdk.models.shared.DestinationDefinitionCreate request) {
        this.request = request;
        return this;
    }
}