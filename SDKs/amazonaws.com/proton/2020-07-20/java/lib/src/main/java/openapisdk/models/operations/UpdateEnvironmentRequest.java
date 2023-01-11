package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnvironmentRequest {
    public UpdateEnvironmentHeaders headers;
    public UpdateEnvironmentRequest withHeaders(UpdateEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEnvironmentInput request;
    public UpdateEnvironmentRequest withRequest(openapisdk.models.shared.UpdateEnvironmentInput request) {
        this.request = request;
        return this;
    }
}