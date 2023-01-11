package openapisdk.models.shared;



/**
 * ListAttachedGroupPoliciesResponse
 * Contains the response to a successful <a>ListAttachedGroupPolicies</a> request. 
**/
public class ListAttachedGroupPoliciesResponse {
    public AttachedPolicy[] attachedPolicies;
    public ListAttachedGroupPoliciesResponse withAttachedPolicies(AttachedPolicy[] attachedPolicies) {
        this.attachedPolicies = attachedPolicies;
        return this;
    }
    public Boolean isTruncated;
    public ListAttachedGroupPoliciesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListAttachedGroupPoliciesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}