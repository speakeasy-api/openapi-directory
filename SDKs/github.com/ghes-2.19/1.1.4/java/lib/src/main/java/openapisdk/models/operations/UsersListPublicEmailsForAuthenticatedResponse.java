package openapisdk.models.operations;



public class UsersListPublicEmailsForAuthenticatedResponse {
    public String contentType;
    public UsersListPublicEmailsForAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UsersListPublicEmailsForAuthenticatedResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UsersListPublicEmailsForAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersListPublicEmailsForAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Email[] emails;
    public UsersListPublicEmailsForAuthenticatedResponse withEmails(openapisdk.models.shared.Email[] emails) {
        this.emails = emails;
        return this;
    }
}