package openapisdk.models.operations;



public class ListDataflowEndpointGroupsRequest {
    public ListDataflowEndpointGroupsQueryParams queryParams;
    public ListDataflowEndpointGroupsRequest withQueryParams(ListDataflowEndpointGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDataflowEndpointGroupsHeaders headers;
    public ListDataflowEndpointGroupsRequest withHeaders(ListDataflowEndpointGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
}