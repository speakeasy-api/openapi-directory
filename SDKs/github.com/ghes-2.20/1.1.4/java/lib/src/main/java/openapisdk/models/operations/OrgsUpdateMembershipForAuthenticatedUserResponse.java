package openapisdk.models.operations;



public class OrgsUpdateMembershipForAuthenticatedUserResponse {
    public String contentType;
    public OrgsUpdateMembershipForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsUpdateMembershipForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsUpdateMembershipForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrgMembership orgMembership;
    public OrgsUpdateMembershipForAuthenticatedUserResponse withOrgMembership(openapisdk.models.shared.OrgMembership orgMembership) {
        this.orgMembership = orgMembership;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public OrgsUpdateMembershipForAuthenticatedUserResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}