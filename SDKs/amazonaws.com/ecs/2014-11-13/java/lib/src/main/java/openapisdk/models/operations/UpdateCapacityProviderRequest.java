package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCapacityProviderRequest {
    public UpdateCapacityProviderHeaders headers;
    public UpdateCapacityProviderRequest withHeaders(UpdateCapacityProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCapacityProviderRequest request;
    public UpdateCapacityProviderRequest withRequest(openapisdk.models.shared.UpdateCapacityProviderRequest request) {
        this.request = request;
        return this;
    }
}