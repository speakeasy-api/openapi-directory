package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAppRequest {
    public CreateAppHeaders headers;
    public CreateAppRequest withHeaders(CreateAppHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAppRequestBody request;
    public CreateAppRequest withRequest(CreateAppRequestBody request) {
        this.request = request;
        return this;
    }
}