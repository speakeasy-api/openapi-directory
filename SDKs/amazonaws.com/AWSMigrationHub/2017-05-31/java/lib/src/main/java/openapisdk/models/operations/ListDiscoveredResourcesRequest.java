package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDiscoveredResourcesRequest {
    public ListDiscoveredResourcesQueryParams queryParams;
    public ListDiscoveredResourcesRequest withQueryParams(ListDiscoveredResourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDiscoveredResourcesHeaders headers;
    public ListDiscoveredResourcesRequest withHeaders(ListDiscoveredResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDiscoveredResourcesRequest request;
    public ListDiscoveredResourcesRequest withRequest(openapisdk.models.shared.ListDiscoveredResourcesRequest request) {
        this.request = request;
        return this;
    }
}