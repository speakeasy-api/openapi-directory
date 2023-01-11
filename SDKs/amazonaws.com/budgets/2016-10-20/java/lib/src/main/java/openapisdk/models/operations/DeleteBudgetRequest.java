package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBudgetRequest {
    public DeleteBudgetHeaders headers;
    public DeleteBudgetRequest withHeaders(DeleteBudgetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteBudgetRequest request;
    public DeleteBudgetRequest withRequest(openapisdk.models.shared.DeleteBudgetRequest request) {
        this.request = request;
        return this;
    }
}