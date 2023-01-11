package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterUsageRequest {
    public RegisterUsageHeaders headers;
    public RegisterUsageRequest withHeaders(RegisterUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterUsageRequest request;
    public RegisterUsageRequest withRequest(openapisdk.models.shared.RegisterUsageRequest request) {
        this.request = request;
        return this;
    }
}