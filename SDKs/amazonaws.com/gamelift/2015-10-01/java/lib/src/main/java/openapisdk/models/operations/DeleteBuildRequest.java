package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBuildRequest {
    public DeleteBuildHeaders headers;
    public DeleteBuildRequest withHeaders(DeleteBuildHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteBuildInput request;
    public DeleteBuildRequest withRequest(openapisdk.models.shared.DeleteBuildInput request) {
        this.request = request;
        return this;
    }
}