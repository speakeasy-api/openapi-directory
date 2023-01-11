package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBuildBatchRequest {
    public DeleteBuildBatchHeaders headers;
    public DeleteBuildBatchRequest withHeaders(DeleteBuildBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteBuildBatchInput request;
    public DeleteBuildBatchRequest withRequest(openapisdk.models.shared.DeleteBuildBatchInput request) {
        this.request = request;
        return this;
    }
}