package openapisdk.models.operations;



public class OrgsSetMembershipForUserResponse {
    public String contentType;
    public OrgsSetMembershipForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsSetMembershipForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsSetMembershipForUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrgMembership orgMembership;
    public OrgsSetMembershipForUserResponse withOrgMembership(openapisdk.models.shared.OrgMembership orgMembership) {
        this.orgMembership = orgMembership;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public OrgsSetMembershipForUserResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}