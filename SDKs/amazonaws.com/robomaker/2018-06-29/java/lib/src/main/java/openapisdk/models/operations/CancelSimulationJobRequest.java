package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelSimulationJobRequest {
    public CancelSimulationJobHeaders headers;
    public CancelSimulationJobRequest withHeaders(CancelSimulationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CancelSimulationJobRequestBody request;
    public CancelSimulationJobRequest withRequest(CancelSimulationJobRequestBody request) {
        this.request = request;
        return this;
    }
}