package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOperationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OperationIdRequestBody request;
    public GetOperationRequest withRequest(openapisdk.models.shared.OperationIdRequestBody request) {
        this.request = request;
        return this;
    }
}