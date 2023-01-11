package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReturnPolicyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReturnPolicyRequest request;
    public CreateReturnPolicyRequest withRequest(openapisdk.models.shared.ReturnPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CreateReturnPolicySecurity security;
    public CreateReturnPolicyRequest withSecurity(CreateReturnPolicySecurity security) {
        this.security = security;
        return this;
    }
}