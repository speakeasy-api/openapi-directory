package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEnvironmentRequest {
    public DeleteEnvironmentHeaders headers;
    public DeleteEnvironmentRequest withHeaders(DeleteEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEnvironmentInput request;
    public DeleteEnvironmentRequest withRequest(openapisdk.models.shared.DeleteEnvironmentInput request) {
        this.request = request;
        return this;
    }
}