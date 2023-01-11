package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSolutionVersionRequest {
    public CreateSolutionVersionHeaders headers;
    public CreateSolutionVersionRequest withHeaders(CreateSolutionVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSolutionVersionRequest request;
    public CreateSolutionVersionRequest withRequest(openapisdk.models.shared.CreateSolutionVersionRequest request) {
        this.request = request;
        return this;
    }
}