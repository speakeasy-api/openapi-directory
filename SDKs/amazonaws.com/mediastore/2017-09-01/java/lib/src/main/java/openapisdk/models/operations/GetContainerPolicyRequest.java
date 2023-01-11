package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainerPolicyRequest {
    public GetContainerPolicyHeaders headers;
    public GetContainerPolicyRequest withHeaders(GetContainerPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetContainerPolicyInput request;
    public GetContainerPolicyRequest withRequest(openapisdk.models.shared.GetContainerPolicyInput request) {
        this.request = request;
        return this;
    }
}