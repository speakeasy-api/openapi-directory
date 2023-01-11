package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomImageRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCustomImageRequestBody request;
    public CreateCustomImageRequest withRequest(CreateCustomImageRequestBody request) {
        this.request = request;
        return this;
    }
}