package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStoreRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateStoreRequest request;
    public CreateStoreRequest withRequest(openapisdk.models.shared.CreateStoreRequest request) {
        this.request = request;
        return this;
    }
}