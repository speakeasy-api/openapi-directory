package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBudgetPerformanceHistoryRequest {
    public DescribeBudgetPerformanceHistoryQueryParams queryParams;
    public DescribeBudgetPerformanceHistoryRequest withQueryParams(DescribeBudgetPerformanceHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeBudgetPerformanceHistoryHeaders headers;
    public DescribeBudgetPerformanceHistoryRequest withHeaders(DescribeBudgetPerformanceHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeBudgetPerformanceHistoryRequest request;
    public DescribeBudgetPerformanceHistoryRequest withRequest(openapisdk.models.shared.DescribeBudgetPerformanceHistoryRequest request) {
        this.request = request;
        return this;
    }
}