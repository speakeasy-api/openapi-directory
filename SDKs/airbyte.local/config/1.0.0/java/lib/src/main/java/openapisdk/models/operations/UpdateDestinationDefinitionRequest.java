package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDestinationDefinitionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DestinationDefinitionUpdate request;
    public UpdateDestinationDefinitionRequest withRequest(openapisdk.models.shared.DestinationDefinitionUpdate request) {
        this.request = request;
        return this;
    }
}