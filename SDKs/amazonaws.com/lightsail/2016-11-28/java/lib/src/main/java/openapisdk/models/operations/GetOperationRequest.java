package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOperationRequest {
    public GetOperationHeaders headers;
    public GetOperationRequest withHeaders(GetOperationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetOperationRequest request;
    public GetOperationRequest withRequest(openapisdk.models.shared.GetOperationRequest request) {
        this.request = request;
        return this;
    }
}