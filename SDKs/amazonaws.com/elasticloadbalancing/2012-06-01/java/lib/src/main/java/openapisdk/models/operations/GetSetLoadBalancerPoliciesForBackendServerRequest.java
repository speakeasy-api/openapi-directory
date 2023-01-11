package openapisdk.models.operations;



public class GetSetLoadBalancerPoliciesForBackendServerRequest {
    public GetSetLoadBalancerPoliciesForBackendServerQueryParams queryParams;
    public GetSetLoadBalancerPoliciesForBackendServerRequest withQueryParams(GetSetLoadBalancerPoliciesForBackendServerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSetLoadBalancerPoliciesForBackendServerHeaders headers;
    public GetSetLoadBalancerPoliciesForBackendServerRequest withHeaders(GetSetLoadBalancerPoliciesForBackendServerHeaders headers) {
        this.headers = headers;
        return this;
    }
}