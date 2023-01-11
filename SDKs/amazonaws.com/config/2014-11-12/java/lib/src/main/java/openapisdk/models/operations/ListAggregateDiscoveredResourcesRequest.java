package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAggregateDiscoveredResourcesRequest {
    public ListAggregateDiscoveredResourcesQueryParams queryParams;
    public ListAggregateDiscoveredResourcesRequest withQueryParams(ListAggregateDiscoveredResourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAggregateDiscoveredResourcesHeaders headers;
    public ListAggregateDiscoveredResourcesRequest withHeaders(ListAggregateDiscoveredResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAggregateDiscoveredResourcesRequest request;
    public ListAggregateDiscoveredResourcesRequest withRequest(openapisdk.models.shared.ListAggregateDiscoveredResourcesRequest request) {
        this.request = request;
        return this;
    }
}