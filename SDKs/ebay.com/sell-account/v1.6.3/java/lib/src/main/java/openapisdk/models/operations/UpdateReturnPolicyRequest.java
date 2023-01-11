package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateReturnPolicyRequest {
    public UpdateReturnPolicyPathParams pathParams;
    public UpdateReturnPolicyRequest withPathParams(UpdateReturnPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReturnPolicyRequest request;
    public UpdateReturnPolicyRequest withRequest(openapisdk.models.shared.ReturnPolicyRequest request) {
        this.request = request;
        return this;
    }
    public UpdateReturnPolicySecurity security;
    public UpdateReturnPolicyRequest withSecurity(UpdateReturnPolicySecurity security) {
        this.security = security;
        return this;
    }
}