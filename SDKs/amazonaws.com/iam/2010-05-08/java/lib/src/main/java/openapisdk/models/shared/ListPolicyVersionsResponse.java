package openapisdk.models.shared;



/**
 * ListPolicyVersionsResponse
 * Contains the response to a successful <a>ListPolicyVersions</a> request. 
**/
public class ListPolicyVersionsResponse {
    public Boolean isTruncated;
    public ListPolicyVersionsResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListPolicyVersionsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public PolicyVersion[] versions;
    public ListPolicyVersionsResponse withVersions(PolicyVersion[] versions) {
        this.versions = versions;
        return this;
    }
}