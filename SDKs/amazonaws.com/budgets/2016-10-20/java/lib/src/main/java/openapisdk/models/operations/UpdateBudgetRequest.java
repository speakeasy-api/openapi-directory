package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBudgetRequest {
    public UpdateBudgetHeaders headers;
    public UpdateBudgetRequest withHeaders(UpdateBudgetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateBudgetRequest request;
    public UpdateBudgetRequest withRequest(openapisdk.models.shared.UpdateBudgetRequest request) {
        this.request = request;
        return this;
    }
}