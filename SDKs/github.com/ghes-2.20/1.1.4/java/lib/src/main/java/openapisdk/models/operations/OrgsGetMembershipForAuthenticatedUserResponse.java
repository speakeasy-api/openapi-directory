package openapisdk.models.operations;



public class OrgsGetMembershipForAuthenticatedUserResponse {
    public String contentType;
    public OrgsGetMembershipForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsGetMembershipForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsGetMembershipForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrgMembership orgMembership;
    public OrgsGetMembershipForAuthenticatedUserResponse withOrgMembership(openapisdk.models.shared.OrgMembership orgMembership) {
        this.orgMembership = orgMembership;
        return this;
    }
}