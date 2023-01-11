package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableAvailabilityZonesForLoadBalancerRequest {
    public PostDisableAvailabilityZonesForLoadBalancerQueryParams queryParams;
    public PostDisableAvailabilityZonesForLoadBalancerRequest withQueryParams(PostDisableAvailabilityZonesForLoadBalancerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableAvailabilityZonesForLoadBalancerHeaders headers;
    public PostDisableAvailabilityZonesForLoadBalancerRequest withHeaders(PostDisableAvailabilityZonesForLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableAvailabilityZonesForLoadBalancerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}