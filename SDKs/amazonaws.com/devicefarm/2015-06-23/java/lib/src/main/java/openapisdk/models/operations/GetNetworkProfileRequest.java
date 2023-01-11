package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkProfileRequest {
    public GetNetworkProfileHeaders headers;
    public GetNetworkProfileRequest withHeaders(GetNetworkProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetNetworkProfileRequest request;
    public GetNetworkProfileRequest withRequest(openapisdk.models.shared.GetNetworkProfileRequest request) {
        this.request = request;
        return this;
    }
}