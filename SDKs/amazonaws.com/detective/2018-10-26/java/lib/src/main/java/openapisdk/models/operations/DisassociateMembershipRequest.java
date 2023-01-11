package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateMembershipRequest {
    public DisassociateMembershipHeaders headers;
    public DisassociateMembershipRequest withHeaders(DisassociateMembershipHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DisassociateMembershipRequestBody request;
    public DisassociateMembershipRequest withRequest(DisassociateMembershipRequestBody request) {
        this.request = request;
        return this;
    }
}