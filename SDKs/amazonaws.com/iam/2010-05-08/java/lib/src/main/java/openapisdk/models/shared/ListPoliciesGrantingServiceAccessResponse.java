package openapisdk.models.shared;



public class ListPoliciesGrantingServiceAccessResponse {
    public Boolean isTruncated;
    public ListPoliciesGrantingServiceAccessResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListPoliciesGrantingServiceAccessResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ListPoliciesGrantingServiceAccessEntry[] policiesGrantingServiceAccess;
    public ListPoliciesGrantingServiceAccessResponse withPoliciesGrantingServiceAccess(ListPoliciesGrantingServiceAccessEntry[] policiesGrantingServiceAccess) {
        this.policiesGrantingServiceAccess = policiesGrantingServiceAccess;
        return this;
    }
}