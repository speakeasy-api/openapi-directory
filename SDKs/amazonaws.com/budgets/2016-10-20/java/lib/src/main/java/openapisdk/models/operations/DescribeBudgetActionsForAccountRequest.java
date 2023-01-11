package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBudgetActionsForAccountRequest {
    public DescribeBudgetActionsForAccountQueryParams queryParams;
    public DescribeBudgetActionsForAccountRequest withQueryParams(DescribeBudgetActionsForAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeBudgetActionsForAccountHeaders headers;
    public DescribeBudgetActionsForAccountRequest withHeaders(DescribeBudgetActionsForAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeBudgetActionsForAccountRequest request;
    public DescribeBudgetActionsForAccountRequest withRequest(openapisdk.models.shared.DescribeBudgetActionsForAccountRequest request) {
        this.request = request;
        return this;
    }
}