package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePaymentPolicyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaymentPolicyRequest request;
    public CreatePaymentPolicyRequest withRequest(openapisdk.models.shared.PaymentPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CreatePaymentPolicySecurity security;
    public CreatePaymentPolicyRequest withSecurity(CreatePaymentPolicySecurity security) {
        this.security = security;
        return this;
    }
}