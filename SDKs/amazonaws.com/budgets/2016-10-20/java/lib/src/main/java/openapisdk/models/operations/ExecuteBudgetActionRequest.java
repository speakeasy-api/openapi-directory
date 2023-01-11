package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteBudgetActionRequest {
    public ExecuteBudgetActionHeaders headers;
    public ExecuteBudgetActionRequest withHeaders(ExecuteBudgetActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExecuteBudgetActionRequest request;
    public ExecuteBudgetActionRequest withRequest(openapisdk.models.shared.ExecuteBudgetActionRequest request) {
        this.request = request;
        return this;
    }
}