package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiApplicationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateApiApplicationNewApiApplication request;
    public CreateApiApplicationRequest withRequest(CreateApiApplicationNewApiApplication request) {
        this.request = request;
        return this;
    }
}