package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBudgetActionRequest {
    public DeleteBudgetActionHeaders headers;
    public DeleteBudgetActionRequest withHeaders(DeleteBudgetActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteBudgetActionRequest request;
    public DeleteBudgetActionRequest withRequest(openapisdk.models.shared.DeleteBudgetActionRequest request) {
        this.request = request;
        return this;
    }
}