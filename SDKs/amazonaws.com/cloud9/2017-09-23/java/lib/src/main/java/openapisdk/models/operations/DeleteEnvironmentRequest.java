package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEnvironmentRequest {
    public DeleteEnvironmentHeaders headers;
    public DeleteEnvironmentRequest withHeaders(DeleteEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEnvironmentRequest request;
    public DeleteEnvironmentRequest withRequest(openapisdk.models.shared.DeleteEnvironmentRequest request) {
        this.request = request;
        return this;
    }
}