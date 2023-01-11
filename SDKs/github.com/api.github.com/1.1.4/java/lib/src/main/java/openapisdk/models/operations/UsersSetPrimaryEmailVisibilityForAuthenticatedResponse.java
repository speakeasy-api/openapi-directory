package openapisdk.models.operations;



public class UsersSetPrimaryEmailVisibilityForAuthenticatedResponse {
    public String contentType;
    public UsersSetPrimaryEmailVisibilityForAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersSetPrimaryEmailVisibilityForAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersSetPrimaryEmailVisibilityForAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Email[] emails;
    public UsersSetPrimaryEmailVisibilityForAuthenticatedResponse withEmails(openapisdk.models.shared.Email[] emails) {
        this.emails = emails;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public UsersSetPrimaryEmailVisibilityForAuthenticatedResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}