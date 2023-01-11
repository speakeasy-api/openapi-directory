package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateMemberAccountRequest {
    public DisassociateMemberAccountHeaders headers;
    public DisassociateMemberAccountRequest withHeaders(DisassociateMemberAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateMemberAccountRequest request;
    public DisassociateMemberAccountRequest withRequest(openapisdk.models.shared.DisassociateMemberAccountRequest request) {
        this.request = request;
        return this;
    }
}