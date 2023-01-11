package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNewVolumeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateNewVolumeRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}