package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResourceShareRequest {
    public CreateResourceShareHeaders headers;
    public CreateResourceShareRequest withHeaders(CreateResourceShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateResourceShareRequestBody request;
    public CreateResourceShareRequest withRequest(CreateResourceShareRequestBody request) {
        this.request = request;
        return this;
    }
}