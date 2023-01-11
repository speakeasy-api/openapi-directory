package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResourceRequest {
    public CreateResourceHeaders headers;
    public CreateResourceRequest withHeaders(CreateResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateResourceRequest request;
    public CreateResourceRequest withRequest(openapisdk.models.shared.CreateResourceRequest request) {
        this.request = request;
        return this;
    }
}