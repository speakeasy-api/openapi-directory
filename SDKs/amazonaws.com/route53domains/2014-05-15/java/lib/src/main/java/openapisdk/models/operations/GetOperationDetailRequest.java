package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOperationDetailRequest {
    public GetOperationDetailHeaders headers;
    public GetOperationDetailRequest withHeaders(GetOperationDetailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetOperationDetailRequest request;
    public GetOperationDetailRequest withRequest(openapisdk.models.shared.GetOperationDetailRequest request) {
        this.request = request;
        return this;
    }
}