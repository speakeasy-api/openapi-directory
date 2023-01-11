package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSimulationApplicationRequest {
    public DeleteSimulationApplicationHeaders headers;
    public DeleteSimulationApplicationRequest withHeaders(DeleteSimulationApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteSimulationApplicationRequestBody request;
    public DeleteSimulationApplicationRequest withRequest(DeleteSimulationApplicationRequestBody request) {
        this.request = request;
        return this;
    }
}