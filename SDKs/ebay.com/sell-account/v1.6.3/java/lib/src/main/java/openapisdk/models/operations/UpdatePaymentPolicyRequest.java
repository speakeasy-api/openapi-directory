package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentPolicyRequest {
    public UpdatePaymentPolicyPathParams pathParams;
    public UpdatePaymentPolicyRequest withPathParams(UpdatePaymentPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaymentPolicyRequest request;
    public UpdatePaymentPolicyRequest withRequest(openapisdk.models.shared.PaymentPolicyRequest request) {
        this.request = request;
        return this;
    }
    public UpdatePaymentPolicySecurity security;
    public UpdatePaymentPolicyRequest withSecurity(UpdatePaymentPolicySecurity security) {
        this.security = security;
        return this;
    }
}