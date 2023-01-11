package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEndpointGroupsRequest {
    public ListEndpointGroupsQueryParams queryParams;
    public ListEndpointGroupsRequest withQueryParams(ListEndpointGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEndpointGroupsHeaders headers;
    public ListEndpointGroupsRequest withHeaders(ListEndpointGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEndpointGroupsRequest request;
    public ListEndpointGroupsRequest withRequest(openapisdk.models.shared.ListEndpointGroupsRequest request) {
        this.request = request;
        return this;
    }
}