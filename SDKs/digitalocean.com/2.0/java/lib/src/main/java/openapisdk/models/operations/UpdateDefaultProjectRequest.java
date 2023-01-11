package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDefaultProjectRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDefaultProjectRequestBodyInput request;
    public UpdateDefaultProjectRequest withRequest(UpdateDefaultProjectRequestBodyInput request) {
        this.request = request;
        return this;
    }
}