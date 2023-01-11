package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContactPolicyRequest {
    public GetContactPolicyHeaders headers;
    public GetContactPolicyRequest withHeaders(GetContactPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetContactPolicyRequest request;
    public GetContactPolicyRequest withRequest(openapisdk.models.shared.GetContactPolicyRequest request) {
        this.request = request;
        return this;
    }
}