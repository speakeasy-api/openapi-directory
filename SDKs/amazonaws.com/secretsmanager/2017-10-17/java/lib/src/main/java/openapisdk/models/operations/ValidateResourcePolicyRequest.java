package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateResourcePolicyRequest {
    public ValidateResourcePolicyHeaders headers;
    public ValidateResourcePolicyRequest withHeaders(ValidateResourcePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ValidateResourcePolicyRequest request;
    public ValidateResourcePolicyRequest withRequest(openapisdk.models.shared.ValidateResourcePolicyRequest request) {
        this.request = request;
        return this;
    }
}