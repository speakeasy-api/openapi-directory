package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnvironmentRequest {
    public GetEnvironmentHeaders headers;
    public GetEnvironmentRequest withHeaders(GetEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEnvironmentInput request;
    public GetEnvironmentRequest withRequest(openapisdk.models.shared.GetEnvironmentInput request) {
        this.request = request;
        return this;
    }
}