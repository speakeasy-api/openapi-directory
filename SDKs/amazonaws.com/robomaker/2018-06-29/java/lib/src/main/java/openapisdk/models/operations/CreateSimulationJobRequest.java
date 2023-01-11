package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSimulationJobRequest {
    public CreateSimulationJobHeaders headers;
    public CreateSimulationJobRequest withHeaders(CreateSimulationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSimulationJobRequestBody request;
    public CreateSimulationJobRequest withRequest(CreateSimulationJobRequestBody request) {
        this.request = request;
        return this;
    }
}