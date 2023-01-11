package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFulfillmentPolicyRequest {
    public UpdateFulfillmentPolicyPathParams pathParams;
    public UpdateFulfillmentPolicyRequest withPathParams(UpdateFulfillmentPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FulfillmentPolicyRequest request;
    public UpdateFulfillmentPolicyRequest withRequest(openapisdk.models.shared.FulfillmentPolicyRequest request) {
        this.request = request;
        return this;
    }
    public UpdateFulfillmentPolicySecurity security;
    public UpdateFulfillmentPolicyRequest withSecurity(UpdateFulfillmentPolicySecurity security) {
        this.security = security;
        return this;
    }
}