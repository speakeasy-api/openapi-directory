package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGroupsRequest {
    public ListGroupsQueryParams queryParams;
    public ListGroupsRequest withQueryParams(ListGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGroupsHeaders headers;
    public ListGroupsRequest withHeaders(ListGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListGroupsRequest request;
    public ListGroupsRequest withRequest(openapisdk.models.shared.ListGroupsRequest request) {
        this.request = request;
        return this;
    }
}