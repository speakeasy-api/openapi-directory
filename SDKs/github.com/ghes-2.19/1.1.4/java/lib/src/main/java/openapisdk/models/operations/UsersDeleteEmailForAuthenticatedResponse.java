package openapisdk.models.operations;



public class UsersDeleteEmailForAuthenticatedResponse {
    public String contentType;
    public UsersDeleteEmailForAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersDeleteEmailForAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersDeleteEmailForAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public UsersDeleteEmailForAuthenticatedResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}