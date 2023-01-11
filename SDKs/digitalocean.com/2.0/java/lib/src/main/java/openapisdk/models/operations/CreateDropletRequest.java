package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDropletRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateDropletRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}