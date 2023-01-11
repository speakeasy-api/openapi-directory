package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRegistryPolicyRequest {
    public PutRegistryPolicyHeaders headers;
    public PutRegistryPolicyRequest withHeaders(PutRegistryPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRegistryPolicyRequest request;
    public PutRegistryPolicyRequest withRequest(openapisdk.models.shared.PutRegistryPolicyRequest request) {
        this.request = request;
        return this;
    }
}