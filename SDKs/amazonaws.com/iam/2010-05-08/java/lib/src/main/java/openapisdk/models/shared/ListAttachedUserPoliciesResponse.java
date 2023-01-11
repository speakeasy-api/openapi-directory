package openapisdk.models.shared;



/**
 * ListAttachedUserPoliciesResponse
 * Contains the response to a successful <a>ListAttachedUserPolicies</a> request. 
**/
public class ListAttachedUserPoliciesResponse {
    public AttachedPolicy[] attachedPolicies;
    public ListAttachedUserPoliciesResponse withAttachedPolicies(AttachedPolicy[] attachedPolicies) {
        this.attachedPolicies = attachedPolicies;
        return this;
    }
    public Boolean isTruncated;
    public ListAttachedUserPoliciesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListAttachedUserPoliciesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}