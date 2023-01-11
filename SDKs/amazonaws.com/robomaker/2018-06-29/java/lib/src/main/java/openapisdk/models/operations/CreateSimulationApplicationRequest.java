package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSimulationApplicationRequest {
    public CreateSimulationApplicationHeaders headers;
    public CreateSimulationApplicationRequest withHeaders(CreateSimulationApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSimulationApplicationRequestBody request;
    public CreateSimulationApplicationRequest withRequest(CreateSimulationApplicationRequestBody request) {
        this.request = request;
        return this;
    }
}