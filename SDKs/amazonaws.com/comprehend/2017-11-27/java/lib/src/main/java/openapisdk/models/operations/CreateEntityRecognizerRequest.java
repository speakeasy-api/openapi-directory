package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEntityRecognizerRequest {
    public CreateEntityRecognizerHeaders headers;
    public CreateEntityRecognizerRequest withHeaders(CreateEntityRecognizerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEntityRecognizerRequest request;
    public CreateEntityRecognizerRequest withRequest(openapisdk.models.shared.CreateEntityRecognizerRequest request) {
        this.request = request;
        return this;
    }
}