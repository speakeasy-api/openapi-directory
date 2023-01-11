package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFleetCapacityRequest {
    public UpdateFleetCapacityHeaders headers;
    public UpdateFleetCapacityRequest withHeaders(UpdateFleetCapacityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFleetCapacityInput request;
    public UpdateFleetCapacityRequest withRequest(openapisdk.models.shared.UpdateFleetCapacityInput request) {
        this.request = request;
        return this;
    }
}