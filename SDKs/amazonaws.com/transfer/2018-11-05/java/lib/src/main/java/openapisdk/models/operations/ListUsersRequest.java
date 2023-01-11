package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsersRequest {
    public ListUsersQueryParams queryParams;
    public ListUsersRequest withQueryParams(ListUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsersHeaders headers;
    public ListUsersRequest withHeaders(ListUsersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListUsersRequest request;
    public ListUsersRequest withRequest(openapisdk.models.shared.ListUsersRequest request) {
        this.request = request;
        return this;
    }
}