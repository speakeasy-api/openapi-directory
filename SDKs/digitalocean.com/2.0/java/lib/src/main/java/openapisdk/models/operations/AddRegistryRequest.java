package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddRegistryRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddRegistryRequestBody request;
    public AddRegistryRequest withRequest(AddRegistryRequestBody request) {
        this.request = request;
        return this;
    }
}