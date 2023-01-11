package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAppRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAppRequestBody request;
    public CreateAppRequest withRequest(CreateAppRequestBody request) {
        this.request = request;
        return this;
    }
}