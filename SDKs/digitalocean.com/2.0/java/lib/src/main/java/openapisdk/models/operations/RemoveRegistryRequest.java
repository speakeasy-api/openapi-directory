package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveRegistryRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21kubernetes1registryPostRequestBodyContentApplication1jsonSchema request;
    public RemoveRegistryRequest withRequest(openapisdk.models.shared.Onev21kubernetes1registryPostRequestBodyContentApplication1jsonSchema request) {
        this.request = request;
        return this;
    }
}