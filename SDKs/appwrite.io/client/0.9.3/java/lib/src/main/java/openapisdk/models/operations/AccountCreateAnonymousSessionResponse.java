package openapisdk.models.operations;



public class AccountCreateAnonymousSessionResponse {
    public String contentType;
    public AccountCreateAnonymousSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountCreateAnonymousSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Session session;
    public AccountCreateAnonymousSessionResponse withSession(openapisdk.models.shared.Session session) {
        this.session = session;
        return this;
    }
}