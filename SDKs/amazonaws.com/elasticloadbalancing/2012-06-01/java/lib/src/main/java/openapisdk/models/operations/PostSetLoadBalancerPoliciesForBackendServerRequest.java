package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetLoadBalancerPoliciesForBackendServerRequest {
    public PostSetLoadBalancerPoliciesForBackendServerQueryParams queryParams;
    public PostSetLoadBalancerPoliciesForBackendServerRequest withQueryParams(PostSetLoadBalancerPoliciesForBackendServerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetLoadBalancerPoliciesForBackendServerHeaders headers;
    public PostSetLoadBalancerPoliciesForBackendServerRequest withHeaders(PostSetLoadBalancerPoliciesForBackendServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetLoadBalancerPoliciesForBackendServerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}