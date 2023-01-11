package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateClassifierRequest {
    public CreateClassifierHeaders headers;
    public CreateClassifierRequest withHeaders(CreateClassifierHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateClassifierRequest request;
    public CreateClassifierRequest withRequest(openapisdk.models.shared.CreateClassifierRequest request) {
        this.request = request;
        return this;
    }
}