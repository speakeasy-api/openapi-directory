package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePendingAggregationRequestsRequest {
    public DescribePendingAggregationRequestsQueryParams queryParams;
    public DescribePendingAggregationRequestsRequest withQueryParams(DescribePendingAggregationRequestsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribePendingAggregationRequestsHeaders headers;
    public DescribePendingAggregationRequestsRequest withHeaders(DescribePendingAggregationRequestsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePendingAggregationRequestsRequest request;
    public DescribePendingAggregationRequestsRequest withRequest(openapisdk.models.shared.DescribePendingAggregationRequestsRequest request) {
        this.request = request;
        return this;
    }
}