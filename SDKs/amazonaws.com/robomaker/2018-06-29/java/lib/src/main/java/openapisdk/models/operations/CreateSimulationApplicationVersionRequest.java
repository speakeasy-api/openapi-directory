package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSimulationApplicationVersionRequest {
    public CreateSimulationApplicationVersionHeaders headers;
    public CreateSimulationApplicationVersionRequest withHeaders(CreateSimulationApplicationVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSimulationApplicationVersionRequestBody request;
    public CreateSimulationApplicationVersionRequest withRequest(CreateSimulationApplicationVersionRequestBody request) {
        this.request = request;
        return this;
    }
}