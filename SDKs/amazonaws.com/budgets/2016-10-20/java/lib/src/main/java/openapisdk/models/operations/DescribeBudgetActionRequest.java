package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBudgetActionRequest {
    public DescribeBudgetActionHeaders headers;
    public DescribeBudgetActionRequest withHeaders(DescribeBudgetActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeBudgetActionRequest request;
    public DescribeBudgetActionRequest withRequest(openapisdk.models.shared.DescribeBudgetActionRequest request) {
        this.request = request;
        return this;
    }
}