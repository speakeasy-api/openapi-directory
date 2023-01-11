package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RestartSimulationJobRequest {
    public RestartSimulationJobHeaders headers;
    public RestartSimulationJobRequest withHeaders(RestartSimulationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RestartSimulationJobRequestBody request;
    public RestartSimulationJobRequest withRequest(RestartSimulationJobRequestBody request) {
        this.request = request;
        return this;
    }
}