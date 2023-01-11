package openapisdk.models.operations;



public class UsersAddEmailForAuthenticatedResponse {
    public String contentType;
    public UsersAddEmailForAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersAddEmailForAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersAddEmailForAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Email[] emails;
    public UsersAddEmailForAuthenticatedResponse withEmails(openapisdk.models.shared.Email[] emails) {
        this.emails = emails;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public UsersAddEmailForAuthenticatedResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}