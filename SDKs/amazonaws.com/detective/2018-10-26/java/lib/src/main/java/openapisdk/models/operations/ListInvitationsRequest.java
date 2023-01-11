package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInvitationsRequest {
    public ListInvitationsQueryParams queryParams;
    public ListInvitationsRequest withQueryParams(ListInvitationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInvitationsHeaders headers;
    public ListInvitationsRequest withHeaders(ListInvitationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListInvitationsRequestBody request;
    public ListInvitationsRequest withRequest(ListInvitationsRequestBody request) {
        this.request = request;
        return this;
    }
}