package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcePolicyRequest {
    public GetResourcePolicyHeaders headers;
    public GetResourcePolicyRequest withHeaders(GetResourcePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResourcePolicyRequest request;
    public GetResourcePolicyRequest withRequest(openapisdk.models.shared.GetResourcePolicyRequest request) {
        this.request = request;
        return this;
    }
}