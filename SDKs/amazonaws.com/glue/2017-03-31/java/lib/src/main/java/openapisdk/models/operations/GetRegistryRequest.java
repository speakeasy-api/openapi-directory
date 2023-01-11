package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegistryRequest {
    public GetRegistryHeaders headers;
    public GetRegistryRequest withHeaders(GetRegistryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRegistryInput request;
    public GetRegistryRequest withRequest(openapisdk.models.shared.GetRegistryInput request) {
        this.request = request;
        return this;
    }
}