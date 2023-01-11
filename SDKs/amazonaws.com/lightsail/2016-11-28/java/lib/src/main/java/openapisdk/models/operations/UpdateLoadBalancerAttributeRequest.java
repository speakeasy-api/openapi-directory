package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLoadBalancerAttributeRequest {
    public UpdateLoadBalancerAttributeHeaders headers;
    public UpdateLoadBalancerAttributeRequest withHeaders(UpdateLoadBalancerAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLoadBalancerAttributeRequest request;
    public UpdateLoadBalancerAttributeRequest withRequest(openapisdk.models.shared.UpdateLoadBalancerAttributeRequest request) {
        this.request = request;
        return this;
    }
}