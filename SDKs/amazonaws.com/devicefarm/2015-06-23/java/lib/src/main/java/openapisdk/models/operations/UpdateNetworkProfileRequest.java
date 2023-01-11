package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkProfileRequest {
    public UpdateNetworkProfileHeaders headers;
    public UpdateNetworkProfileRequest withHeaders(UpdateNetworkProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateNetworkProfileRequest request;
    public UpdateNetworkProfileRequest withRequest(openapisdk.models.shared.UpdateNetworkProfileRequest request) {
        this.request = request;
        return this;
    }
}