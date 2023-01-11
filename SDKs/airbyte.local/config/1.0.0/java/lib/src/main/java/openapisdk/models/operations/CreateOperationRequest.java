package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOperationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OperationCreate request;
    public CreateOperationRequest withRequest(openapisdk.models.shared.OperationCreate request) {
        this.request = request;
        return this;
    }
}