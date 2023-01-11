package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOperationsForResourceRequest {
    public GetOperationsForResourceHeaders headers;
    public GetOperationsForResourceRequest withHeaders(GetOperationsForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetOperationsForResourceRequest request;
    public GetOperationsForResourceRequest withRequest(openapisdk.models.shared.GetOperationsForResourceRequest request) {
        this.request = request;
        return this;
    }
}