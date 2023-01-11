package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchCheckLayerAvailabilityRequest {
    public BatchCheckLayerAvailabilityHeaders headers;
    public BatchCheckLayerAvailabilityRequest withHeaders(BatchCheckLayerAvailabilityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchCheckLayerAvailabilityRequest request;
    public BatchCheckLayerAvailabilityRequest withRequest(openapisdk.models.shared.BatchCheckLayerAvailabilityRequest request) {
        this.request = request;
        return this;
    }
}