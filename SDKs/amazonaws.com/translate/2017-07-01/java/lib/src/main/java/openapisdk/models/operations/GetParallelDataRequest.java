package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetParallelDataRequest {
    public GetParallelDataHeaders headers;
    public GetParallelDataRequest withHeaders(GetParallelDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetParallelDataRequest request;
    public GetParallelDataRequest withRequest(openapisdk.models.shared.GetParallelDataRequest request) {
        this.request = request;
        return this;
    }
}