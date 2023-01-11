package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteParallelDataRequest {
    public DeleteParallelDataHeaders headers;
    public DeleteParallelDataRequest withHeaders(DeleteParallelDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteParallelDataRequest request;
    public DeleteParallelDataRequest withRequest(openapisdk.models.shared.DeleteParallelDataRequest request) {
        this.request = request;
        return this;
    }
}