package openapisdk.models.operations;



public class GetSetLoadBalancerPoliciesOfListenerRequest {
    public GetSetLoadBalancerPoliciesOfListenerQueryParams queryParams;
    public GetSetLoadBalancerPoliciesOfListenerRequest withQueryParams(GetSetLoadBalancerPoliciesOfListenerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSetLoadBalancerPoliciesOfListenerHeaders headers;
    public GetSetLoadBalancerPoliciesOfListenerRequest withHeaders(GetSetLoadBalancerPoliciesOfListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
}