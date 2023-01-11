package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPolicyRequest {
    public GetPolicyHeaders headers;
    public GetPolicyRequest withHeaders(GetPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPolicyRequest request;
    public GetPolicyRequest withRequest(openapisdk.models.shared.GetPolicyRequest request) {
        this.request = request;
        return this;
    }
}