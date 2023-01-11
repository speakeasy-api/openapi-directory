package openapisdk.models.shared;



/**
 * ListPoliciesResponse
 * Contains the response to a successful <a>ListPolicies</a> request. 
**/
public class ListPoliciesResponse {
    public Boolean isTruncated;
    public ListPoliciesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListPoliciesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Policy[] policies;
    public ListPoliciesResponse withPolicies(Policy[] policies) {
        this.policies = policies;
        return this;
    }
}