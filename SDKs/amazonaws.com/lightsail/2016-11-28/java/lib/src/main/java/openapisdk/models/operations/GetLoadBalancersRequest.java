package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoadBalancersRequest {
    public GetLoadBalancersHeaders headers;
    public GetLoadBalancersRequest withHeaders(GetLoadBalancersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLoadBalancersRequest request;
    public GetLoadBalancersRequest withRequest(openapisdk.models.shared.GetLoadBalancersRequest request) {
        this.request = request;
        return this;
    }
}