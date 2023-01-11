package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRegistryRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateRegistryRequestBody request;
    public CreateRegistryRequest withRequest(CreateRegistryRequestBody request) {
        this.request = request;
        return this;
    }
}