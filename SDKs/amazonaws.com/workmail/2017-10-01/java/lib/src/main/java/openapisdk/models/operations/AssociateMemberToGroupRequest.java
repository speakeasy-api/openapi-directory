package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateMemberToGroupRequest {
    public AssociateMemberToGroupHeaders headers;
    public AssociateMemberToGroupRequest withHeaders(AssociateMemberToGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateMemberToGroupRequest request;
    public AssociateMemberToGroupRequest withRequest(openapisdk.models.shared.AssociateMemberToGroupRequest request) {
        this.request = request;
        return this;
    }
}