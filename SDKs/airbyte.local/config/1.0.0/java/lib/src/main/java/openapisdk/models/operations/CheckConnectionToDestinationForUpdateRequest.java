package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckConnectionToDestinationForUpdateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DestinationUpdate request;
    public CheckConnectionToDestinationForUpdateRequest withRequest(openapisdk.models.shared.DestinationUpdate request) {
        this.request = request;
        return this;
    }
}