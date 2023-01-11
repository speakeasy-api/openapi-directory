package openapisdk.models.shared;



/**
 * ListRolePoliciesResponse
 * Contains the response to a successful <a>ListRolePolicies</a> request. 
**/
public class ListRolePoliciesResponse {
    public Boolean isTruncated;
    public ListRolePoliciesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListRolePoliciesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public String[] policyNames;
    public ListRolePoliciesResponse withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
}