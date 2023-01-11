package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceShareInvitationsRequest {
    public GetResourceShareInvitationsQueryParams queryParams;
    public GetResourceShareInvitationsRequest withQueryParams(GetResourceShareInvitationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetResourceShareInvitationsHeaders headers;
    public GetResourceShareInvitationsRequest withHeaders(GetResourceShareInvitationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetResourceShareInvitationsRequestBody request;
    public GetResourceShareInvitationsRequest withRequest(GetResourceShareInvitationsRequestBody request) {
        this.request = request;
        return this;
    }
}