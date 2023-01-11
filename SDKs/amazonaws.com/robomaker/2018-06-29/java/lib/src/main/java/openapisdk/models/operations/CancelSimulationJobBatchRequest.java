package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelSimulationJobBatchRequest {
    public CancelSimulationJobBatchHeaders headers;
    public CancelSimulationJobBatchRequest withHeaders(CancelSimulationJobBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CancelSimulationJobBatchRequestBody request;
    public CancelSimulationJobBatchRequest withRequest(CancelSimulationJobBatchRequestBody request) {
        this.request = request;
        return this;
    }
}