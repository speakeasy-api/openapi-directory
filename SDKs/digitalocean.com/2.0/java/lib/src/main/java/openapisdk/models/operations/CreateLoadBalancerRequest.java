package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLoadBalancerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateLoadBalancerRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}