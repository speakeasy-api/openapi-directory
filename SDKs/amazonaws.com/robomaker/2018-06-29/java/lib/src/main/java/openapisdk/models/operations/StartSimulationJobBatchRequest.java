package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSimulationJobBatchRequest {
    public StartSimulationJobBatchHeaders headers;
    public StartSimulationJobBatchRequest withHeaders(StartSimulationJobBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartSimulationJobBatchRequestBody request;
    public StartSimulationJobBatchRequest withRequest(StartSimulationJobBatchRequestBody request) {
        this.request = request;
        return this;
    }
}