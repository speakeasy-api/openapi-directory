package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkerBlockRequest {
    public DeleteWorkerBlockHeaders headers;
    public DeleteWorkerBlockRequest withHeaders(DeleteWorkerBlockHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteWorkerBlockRequest request;
    public DeleteWorkerBlockRequest withRequest(openapisdk.models.shared.DeleteWorkerBlockRequest request) {
        this.request = request;
        return this;
    }
}