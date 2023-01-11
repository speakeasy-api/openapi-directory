package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMapRequest {
    public CreateMapHeaders headers;
    public CreateMapRequest withHeaders(CreateMapHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMapRequestBody request;
    public CreateMapRequest withRequest(CreateMapRequestBody request) {
        this.request = request;
        return this;
    }
}