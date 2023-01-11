package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBudgetActionHistoriesRequest {
    public DescribeBudgetActionHistoriesQueryParams queryParams;
    public DescribeBudgetActionHistoriesRequest withQueryParams(DescribeBudgetActionHistoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeBudgetActionHistoriesHeaders headers;
    public DescribeBudgetActionHistoriesRequest withHeaders(DescribeBudgetActionHistoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeBudgetActionHistoriesRequest request;
    public DescribeBudgetActionHistoriesRequest withRequest(openapisdk.models.shared.DescribeBudgetActionHistoriesRequest request) {
        this.request = request;
        return this;
    }
}