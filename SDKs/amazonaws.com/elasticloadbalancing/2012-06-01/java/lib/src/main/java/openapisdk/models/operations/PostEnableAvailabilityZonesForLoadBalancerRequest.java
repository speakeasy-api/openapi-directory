package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableAvailabilityZonesForLoadBalancerRequest {
    public PostEnableAvailabilityZonesForLoadBalancerQueryParams queryParams;
    public PostEnableAvailabilityZonesForLoadBalancerRequest withQueryParams(PostEnableAvailabilityZonesForLoadBalancerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableAvailabilityZonesForLoadBalancerHeaders headers;
    public PostEnableAvailabilityZonesForLoadBalancerRequest withHeaders(PostEnableAvailabilityZonesForLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableAvailabilityZonesForLoadBalancerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}