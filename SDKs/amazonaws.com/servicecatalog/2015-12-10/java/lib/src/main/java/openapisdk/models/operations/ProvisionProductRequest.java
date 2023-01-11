package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProvisionProductRequest {
    public ProvisionProductHeaders headers;
    public ProvisionProductRequest withHeaders(ProvisionProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProvisionProductInput request;
    public ProvisionProductRequest withRequest(openapisdk.models.shared.ProvisionProductInput request) {
        this.request = request;
        return this;
    }
}