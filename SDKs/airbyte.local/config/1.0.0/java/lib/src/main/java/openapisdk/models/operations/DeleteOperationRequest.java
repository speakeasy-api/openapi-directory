package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOperationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OperationIdRequestBody request;
    public DeleteOperationRequest withRequest(openapisdk.models.shared.OperationIdRequestBody request) {
        this.request = request;
        return this;
    }
}