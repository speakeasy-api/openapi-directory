package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRegistryRequest {
    public CreateRegistryHeaders headers;
    public CreateRegistryRequest withHeaders(CreateRegistryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRegistryInput request;
    public CreateRegistryRequest withRequest(openapisdk.models.shared.CreateRegistryInput request) {
        this.request = request;
        return this;
    }
}