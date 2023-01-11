package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSolutionRequest {
    public DeleteSolutionHeaders headers;
    public DeleteSolutionRequest withHeaders(DeleteSolutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSolutionRequest request;
    public DeleteSolutionRequest withRequest(openapisdk.models.shared.DeleteSolutionRequest request) {
        this.request = request;
        return this;
    }
}