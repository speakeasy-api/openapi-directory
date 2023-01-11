package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkProfileRequest {
    public CreateNetworkProfileHeaders headers;
    public CreateNetworkProfileRequest withHeaders(CreateNetworkProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateNetworkProfileRequest request;
    public CreateNetworkProfileRequest withRequest(openapisdk.models.shared.CreateNetworkProfileRequest request) {
        this.request = request;
        return this;
    }
}