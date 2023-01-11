package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBudgetsRequest {
    public DescribeBudgetsQueryParams queryParams;
    public DescribeBudgetsRequest withQueryParams(DescribeBudgetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeBudgetsHeaders headers;
    public DescribeBudgetsRequest withHeaders(DescribeBudgetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeBudgetsRequest request;
    public DescribeBudgetsRequest withRequest(openapisdk.models.shared.DescribeBudgetsRequest request) {
        this.request = request;
        return this;
    }
}