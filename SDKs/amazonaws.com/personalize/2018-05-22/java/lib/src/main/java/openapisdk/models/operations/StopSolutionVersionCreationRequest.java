package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopSolutionVersionCreationRequest {
    public StopSolutionVersionCreationHeaders headers;
    public StopSolutionVersionCreationRequest withHeaders(StopSolutionVersionCreationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopSolutionVersionCreationRequest request;
    public StopSolutionVersionCreationRequest withRequest(openapisdk.models.shared.StopSolutionVersionCreationRequest request) {
        this.request = request;
        return this;
    }
}