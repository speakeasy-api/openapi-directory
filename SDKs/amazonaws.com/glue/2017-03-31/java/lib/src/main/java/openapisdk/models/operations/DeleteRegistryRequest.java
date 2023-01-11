package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRegistryRequest {
    public DeleteRegistryHeaders headers;
    public DeleteRegistryRequest withHeaders(DeleteRegistryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRegistryInput request;
    public DeleteRegistryRequest withRequest(openapisdk.models.shared.DeleteRegistryInput request) {
        this.request = request;
        return this;
    }
}