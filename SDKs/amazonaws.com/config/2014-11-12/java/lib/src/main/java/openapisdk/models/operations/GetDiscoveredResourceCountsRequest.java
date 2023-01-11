package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiscoveredResourceCountsRequest {
    public GetDiscoveredResourceCountsQueryParams queryParams;
    public GetDiscoveredResourceCountsRequest withQueryParams(GetDiscoveredResourceCountsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDiscoveredResourceCountsHeaders headers;
    public GetDiscoveredResourceCountsRequest withHeaders(GetDiscoveredResourceCountsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDiscoveredResourceCountsRequest request;
    public GetDiscoveredResourceCountsRequest withRequest(openapisdk.models.shared.GetDiscoveredResourceCountsRequest request) {
        this.request = request;
        return this;
    }
}