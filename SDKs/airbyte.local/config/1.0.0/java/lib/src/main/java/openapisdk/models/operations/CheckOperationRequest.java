package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckOperationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OperatorConfiguration request;
    public CheckOperationRequest withRequest(openapisdk.models.shared.OperatorConfiguration request) {
        this.request = request;
        return this;
    }
}