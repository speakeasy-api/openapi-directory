package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOperationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OperationUpdate request;
    public UpdateOperationRequest withRequest(openapisdk.models.shared.OperationUpdate request) {
        this.request = request;
        return this;
    }
}