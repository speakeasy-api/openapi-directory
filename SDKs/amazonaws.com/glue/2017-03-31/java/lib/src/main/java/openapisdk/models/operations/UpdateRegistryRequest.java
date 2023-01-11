package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRegistryRequest {
    public UpdateRegistryHeaders headers;
    public UpdateRegistryRequest withHeaders(UpdateRegistryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRegistryInput request;
    public UpdateRegistryRequest withRequest(openapisdk.models.shared.UpdateRegistryInput request) {
        this.request = request;
        return this;
    }
}