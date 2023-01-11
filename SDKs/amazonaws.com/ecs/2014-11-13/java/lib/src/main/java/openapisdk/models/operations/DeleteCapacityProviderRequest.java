package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCapacityProviderRequest {
    public DeleteCapacityProviderHeaders headers;
    public DeleteCapacityProviderRequest withHeaders(DeleteCapacityProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCapacityProviderRequest request;
    public DeleteCapacityProviderRequest withRequest(openapisdk.models.shared.DeleteCapacityProviderRequest request) {
        this.request = request;
        return this;
    }
}