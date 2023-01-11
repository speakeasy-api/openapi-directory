package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBudgetRequest {
    public CreateBudgetHeaders headers;
    public CreateBudgetRequest withHeaders(CreateBudgetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateBudgetRequest request;
    public CreateBudgetRequest withRequest(openapisdk.models.shared.CreateBudgetRequest request) {
        this.request = request;
        return this;
    }
}