package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAggregateDiscoveredResourceCountsRequest {
    public GetAggregateDiscoveredResourceCountsQueryParams queryParams;
    public GetAggregateDiscoveredResourceCountsRequest withQueryParams(GetAggregateDiscoveredResourceCountsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAggregateDiscoveredResourceCountsHeaders headers;
    public GetAggregateDiscoveredResourceCountsRequest withHeaders(GetAggregateDiscoveredResourceCountsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAggregateDiscoveredResourceCountsRequest request;
    public GetAggregateDiscoveredResourceCountsRequest withRequest(openapisdk.models.shared.GetAggregateDiscoveredResourceCountsRequest request) {
        this.request = request;
        return this;
    }
}