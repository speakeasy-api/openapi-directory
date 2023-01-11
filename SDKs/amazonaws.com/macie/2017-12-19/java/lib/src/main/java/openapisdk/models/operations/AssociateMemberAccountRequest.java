package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateMemberAccountRequest {
    public AssociateMemberAccountHeaders headers;
    public AssociateMemberAccountRequest withHeaders(AssociateMemberAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateMemberAccountRequest request;
    public AssociateMemberAccountRequest withRequest(openapisdk.models.shared.AssociateMemberAccountRequest request) {
        this.request = request;
        return this;
    }
}