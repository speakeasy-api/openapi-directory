package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBudgetRequest {
    public DescribeBudgetHeaders headers;
    public DescribeBudgetRequest withHeaders(DescribeBudgetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeBudgetRequest request;
    public DescribeBudgetRequest withRequest(openapisdk.models.shared.DescribeBudgetRequest request) {
        this.request = request;
        return this;
    }
}