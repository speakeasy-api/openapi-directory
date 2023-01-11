package openapisdk.models.operations;



public class OrgsGetMembershipForUserResponse {
    public String contentType;
    public OrgsGetMembershipForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsGetMembershipForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsGetMembershipForUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrgMembership orgMembership;
    public OrgsGetMembershipForUserResponse withOrgMembership(openapisdk.models.shared.OrgMembership orgMembership) {
        this.orgMembership = orgMembership;
        return this;
    }
}