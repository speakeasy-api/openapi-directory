package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBudgetActionRequest {
    public CreateBudgetActionHeaders headers;
    public CreateBudgetActionRequest withHeaders(CreateBudgetActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateBudgetActionRequest request;
    public CreateBudgetActionRequest withRequest(openapisdk.models.shared.CreateBudgetActionRequest request) {
        this.request = request;
        return this;
    }
}