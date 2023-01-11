package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBillingGroupRequest {
    public UpdateBillingGroupPathParams pathParams;
    public UpdateBillingGroupRequest withPathParams(UpdateBillingGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateBillingGroupHeaders headers;
    public UpdateBillingGroupRequest withHeaders(UpdateBillingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateBillingGroupRequestBody request;
    public UpdateBillingGroupRequest withRequest(UpdateBillingGroupRequestBody request) {
        this.request = request;
        return this;
    }
}