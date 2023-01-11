package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateProjectRequestBodyInput request;
    public CreateProjectRequest withRequest(CreateProjectRequestBodyInput request) {
        this.request = request;
        return this;
    }
}