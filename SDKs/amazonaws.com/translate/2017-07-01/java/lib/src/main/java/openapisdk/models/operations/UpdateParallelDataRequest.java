package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateParallelDataRequest {
    public UpdateParallelDataHeaders headers;
    public UpdateParallelDataRequest withHeaders(UpdateParallelDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateParallelDataRequest request;
    public UpdateParallelDataRequest withRequest(openapisdk.models.shared.UpdateParallelDataRequest request) {
        this.request = request;
        return this;
    }
}