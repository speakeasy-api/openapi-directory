package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApplySecurityGroupsToLoadBalancerRequest {
    public PostApplySecurityGroupsToLoadBalancerQueryParams queryParams;
    public PostApplySecurityGroupsToLoadBalancerRequest withQueryParams(PostApplySecurityGroupsToLoadBalancerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostApplySecurityGroupsToLoadBalancerHeaders headers;
    public PostApplySecurityGroupsToLoadBalancerRequest withHeaders(PostApplySecurityGroupsToLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostApplySecurityGroupsToLoadBalancerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}