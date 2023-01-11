package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCaseRequest {
    public CreateCaseHeaders headers;
    public CreateCaseRequest withHeaders(CreateCaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCaseRequest request;
    public CreateCaseRequest withRequest(openapisdk.models.shared.CreateCaseRequest request) {
        this.request = request;
        return this;
    }
}