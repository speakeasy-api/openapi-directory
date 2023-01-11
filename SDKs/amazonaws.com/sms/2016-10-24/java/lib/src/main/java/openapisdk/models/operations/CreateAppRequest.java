package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAppRequest {
    public CreateAppHeaders headers;
    public CreateAppRequest withHeaders(CreateAppHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAppRequest request;
    public CreateAppRequest withRequest(openapisdk.models.shared.CreateAppRequest request) {
        this.request = request;
        return this;
    }
}