package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOperationsRequest {
    public GetOperationsHeaders headers;
    public GetOperationsRequest withHeaders(GetOperationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetOperationsRequest request;
    public GetOperationsRequest withRequest(openapisdk.models.shared.GetOperationsRequest request) {
        this.request = request;
        return this;
    }
}