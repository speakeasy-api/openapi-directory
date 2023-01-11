package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFloatingIpRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateFloatingIpRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}