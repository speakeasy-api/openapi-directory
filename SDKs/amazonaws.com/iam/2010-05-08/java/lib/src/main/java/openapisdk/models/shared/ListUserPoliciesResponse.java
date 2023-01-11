package openapisdk.models.shared;



/**
 * ListUserPoliciesResponse
 * Contains the response to a successful <a>ListUserPolicies</a> request. 
**/
public class ListUserPoliciesResponse {
    public Boolean isTruncated;
    public ListUserPoliciesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListUserPoliciesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public String[] policyNames;
    public ListUserPoliciesResponse withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
}