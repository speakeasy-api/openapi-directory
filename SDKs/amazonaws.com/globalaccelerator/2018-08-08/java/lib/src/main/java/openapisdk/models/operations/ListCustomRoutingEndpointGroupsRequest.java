package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomRoutingEndpointGroupsRequest {
    public ListCustomRoutingEndpointGroupsQueryParams queryParams;
    public ListCustomRoutingEndpointGroupsRequest withQueryParams(ListCustomRoutingEndpointGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomRoutingEndpointGroupsHeaders headers;
    public ListCustomRoutingEndpointGroupsRequest withHeaders(ListCustomRoutingEndpointGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCustomRoutingEndpointGroupsRequest request;
    public ListCustomRoutingEndpointGroupsRequest withRequest(openapisdk.models.shared.ListCustomRoutingEndpointGroupsRequest request) {
        this.request = request;
        return this;
    }
}