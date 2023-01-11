package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateMembersRequest {
    public DisassociateMembersHeaders headers;
    public DisassociateMembersRequest withHeaders(DisassociateMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DisassociateMembersRequestBody request;
    public DisassociateMembersRequest withRequest(DisassociateMembersRequestBody request) {
        this.request = request;
        return this;
    }
}