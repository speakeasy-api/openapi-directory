package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBudgetActionRequest {
    public UpdateBudgetActionHeaders headers;
    public UpdateBudgetActionRequest withHeaders(UpdateBudgetActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateBudgetActionRequest request;
    public UpdateBudgetActionRequest withRequest(openapisdk.models.shared.UpdateBudgetActionRequest request) {
        this.request = request;
        return this;
    }
}