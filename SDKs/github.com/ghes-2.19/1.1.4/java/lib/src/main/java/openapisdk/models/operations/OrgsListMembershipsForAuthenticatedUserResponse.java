package openapisdk.models.operations;



public class OrgsListMembershipsForAuthenticatedUserResponse {
    public String contentType;
    public OrgsListMembershipsForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OrgsListMembershipsForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OrgsListMembershipsForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsListMembershipsForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrgMembership[] orgMemberships;
    public OrgsListMembershipsForAuthenticatedUserResponse withOrgMemberships(openapisdk.models.shared.OrgMembership[] orgMemberships) {
        this.orgMemberships = orgMemberships;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public OrgsListMembershipsForAuthenticatedUserResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}