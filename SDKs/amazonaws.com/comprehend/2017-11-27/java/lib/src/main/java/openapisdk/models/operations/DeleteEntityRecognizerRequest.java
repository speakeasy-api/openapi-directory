package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEntityRecognizerRequest {
    public DeleteEntityRecognizerHeaders headers;
    public DeleteEntityRecognizerRequest withHeaders(DeleteEntityRecognizerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEntityRecognizerRequest request;
    public DeleteEntityRecognizerRequest withRequest(openapisdk.models.shared.DeleteEntityRecognizerRequest request) {
        this.request = request;
        return this;
    }
}