package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateComponentVersionRequest {
    public CreateComponentVersionHeaders headers;
    public CreateComponentVersionRequest withHeaders(CreateComponentVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateComponentVersionRequestBody request;
    public CreateComponentVersionRequest withRequest(CreateComponentVersionRequestBody request) {
        this.request = request;
        return this;
    }
}