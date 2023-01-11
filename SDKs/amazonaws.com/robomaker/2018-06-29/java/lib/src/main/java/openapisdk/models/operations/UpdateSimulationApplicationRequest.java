package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSimulationApplicationRequest {
    public UpdateSimulationApplicationHeaders headers;
    public UpdateSimulationApplicationRequest withHeaders(UpdateSimulationApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSimulationApplicationRequestBody request;
    public UpdateSimulationApplicationRequest withRequest(UpdateSimulationApplicationRequestBody request) {
        this.request = request;
        return this;
    }
}