package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateMemberFromGroupRequest {
    public DisassociateMemberFromGroupHeaders headers;
    public DisassociateMemberFromGroupRequest withHeaders(DisassociateMemberFromGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateMemberFromGroupRequest request;
    public DisassociateMemberFromGroupRequest withRequest(openapisdk.models.shared.DisassociateMemberFromGroupRequest request) {
        this.request = request;
        return this;
    }
}