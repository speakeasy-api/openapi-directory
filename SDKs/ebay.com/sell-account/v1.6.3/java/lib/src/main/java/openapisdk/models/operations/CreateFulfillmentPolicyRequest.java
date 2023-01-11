package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFulfillmentPolicyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FulfillmentPolicyRequest request;
    public CreateFulfillmentPolicyRequest withRequest(openapisdk.models.shared.FulfillmentPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CreateFulfillmentPolicySecurity security;
    public CreateFulfillmentPolicyRequest withSecurity(CreateFulfillmentPolicySecurity security) {
        this.security = security;
        return this;
    }
}