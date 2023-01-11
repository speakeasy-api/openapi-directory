package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBudgetActionsForBudgetRequest {
    public DescribeBudgetActionsForBudgetQueryParams queryParams;
    public DescribeBudgetActionsForBudgetRequest withQueryParams(DescribeBudgetActionsForBudgetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeBudgetActionsForBudgetHeaders headers;
    public DescribeBudgetActionsForBudgetRequest withHeaders(DescribeBudgetActionsForBudgetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeBudgetActionsForBudgetRequest request;
    public DescribeBudgetActionsForBudgetRequest withRequest(openapisdk.models.shared.DescribeBudgetActionsForBudgetRequest request) {
        this.request = request;
        return this;
    }
}