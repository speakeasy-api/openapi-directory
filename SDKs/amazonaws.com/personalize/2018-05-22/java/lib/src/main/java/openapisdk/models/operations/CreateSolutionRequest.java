package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSolutionRequest {
    public CreateSolutionHeaders headers;
    public CreateSolutionRequest withHeaders(CreateSolutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSolutionRequest request;
    public CreateSolutionRequest withRequest(openapisdk.models.shared.CreateSolutionRequest request) {
        this.request = request;
        return this;
    }
}