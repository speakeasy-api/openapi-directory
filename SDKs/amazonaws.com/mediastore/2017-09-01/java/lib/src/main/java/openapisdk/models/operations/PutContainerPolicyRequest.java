package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutContainerPolicyRequest {
    public PutContainerPolicyHeaders headers;
    public PutContainerPolicyRequest withHeaders(PutContainerPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutContainerPolicyInput request;
    public PutContainerPolicyRequest withRequest(openapisdk.models.shared.PutContainerPolicyInput request) {
        this.request = request;
        return this;
    }
}