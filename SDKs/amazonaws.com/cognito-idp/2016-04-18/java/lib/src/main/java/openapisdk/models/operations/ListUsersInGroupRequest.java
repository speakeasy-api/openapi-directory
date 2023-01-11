package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsersInGroupRequest {
    public ListUsersInGroupQueryParams queryParams;
    public ListUsersInGroupRequest withQueryParams(ListUsersInGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsersInGroupHeaders headers;
    public ListUsersInGroupRequest withHeaders(ListUsersInGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListUsersInGroupRequest request;
    public ListUsersInGroupRequest withRequest(openapisdk.models.shared.ListUsersInGroupRequest request) {
        this.request = request;
        return this;
    }
}