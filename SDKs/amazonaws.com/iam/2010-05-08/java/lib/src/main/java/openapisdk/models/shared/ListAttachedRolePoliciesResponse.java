package openapisdk.models.shared;



/**
 * ListAttachedRolePoliciesResponse
 * Contains the response to a successful <a>ListAttachedRolePolicies</a> request. 
**/
public class ListAttachedRolePoliciesResponse {
    public AttachedPolicy[] attachedPolicies;
    public ListAttachedRolePoliciesResponse withAttachedPolicies(AttachedPolicy[] attachedPolicies) {
        this.attachedPolicies = attachedPolicies;
        return this;
    }
    public Boolean isTruncated;
    public ListAttachedRolePoliciesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListAttachedRolePoliciesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}