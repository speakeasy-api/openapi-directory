package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnvironmentRequest {
    public UpdateEnvironmentHeaders headers;
    public UpdateEnvironmentRequest withHeaders(UpdateEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEnvironmentRequest request;
    public UpdateEnvironmentRequest withRequest(openapisdk.models.shared.UpdateEnvironmentRequest request) {
        this.request = request;
        return this;
    }
}