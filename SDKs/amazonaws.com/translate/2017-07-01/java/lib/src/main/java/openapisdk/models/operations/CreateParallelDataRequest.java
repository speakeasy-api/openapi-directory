package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateParallelDataRequest {
    public CreateParallelDataHeaders headers;
    public CreateParallelDataRequest withHeaders(CreateParallelDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateParallelDataRequest request;
    public CreateParallelDataRequest withRequest(openapisdk.models.shared.CreateParallelDataRequest request) {
        this.request = request;
        return this;
    }
}