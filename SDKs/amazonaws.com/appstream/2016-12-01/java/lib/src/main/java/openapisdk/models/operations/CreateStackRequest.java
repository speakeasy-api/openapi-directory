package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStackRequest {
    public CreateStackHeaders headers;
    public CreateStackRequest withHeaders(CreateStackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateStackRequest request;
    public CreateStackRequest withRequest(openapisdk.models.shared.CreateStackRequest request) {
        this.request = request;
        return this;
    }
}