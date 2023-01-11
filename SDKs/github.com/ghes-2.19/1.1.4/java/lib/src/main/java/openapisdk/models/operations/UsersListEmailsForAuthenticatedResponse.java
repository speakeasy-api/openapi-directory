package openapisdk.models.operations;



public class UsersListEmailsForAuthenticatedResponse {
    public String contentType;
    public UsersListEmailsForAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UsersListEmailsForAuthenticatedResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UsersListEmailsForAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersListEmailsForAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Email[] emails;
    public UsersListEmailsForAuthenticatedResponse withEmails(openapisdk.models.shared.Email[] emails) {
        this.emails = emails;
        return this;
    }
}