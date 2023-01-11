package openapisdk.models.shared;



/**
 * ListGroupPoliciesResponse
 * Contains the response to a successful <a>ListGroupPolicies</a> request. 
**/
public class ListGroupPoliciesResponse {
    public Boolean isTruncated;
    public ListGroupPoliciesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListGroupPoliciesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public String[] policyNames;
    public ListGroupPoliciesResponse withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
}