package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResourceServerRequest {
    public CreateResourceServerHeaders headers;
    public CreateResourceServerRequest withHeaders(CreateResourceServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateResourceServerRequest request;
    public CreateResourceServerRequest withRequest(openapisdk.models.shared.CreateResourceServerRequest request) {
        this.request = request;
        return this;
    }
}