package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBillingGroupRequest {
    public CreateBillingGroupPathParams pathParams;
    public CreateBillingGroupRequest withPathParams(CreateBillingGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateBillingGroupHeaders headers;
    public CreateBillingGroupRequest withHeaders(CreateBillingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBillingGroupRequestBody request;
    public CreateBillingGroupRequest withRequest(CreateBillingGroupRequestBody request) {
        this.request = request;
        return this;
    }
}