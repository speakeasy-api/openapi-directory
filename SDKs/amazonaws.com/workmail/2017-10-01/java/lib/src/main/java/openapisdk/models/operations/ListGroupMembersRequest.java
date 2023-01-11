package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGroupMembersRequest {
    public ListGroupMembersQueryParams queryParams;
    public ListGroupMembersRequest withQueryParams(ListGroupMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGroupMembersHeaders headers;
    public ListGroupMembersRequest withHeaders(ListGroupMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListGroupMembersRequest request;
    public ListGroupMembersRequest withRequest(openapisdk.models.shared.ListGroupMembersRequest request) {
        this.request = request;
        return this;
    }
}