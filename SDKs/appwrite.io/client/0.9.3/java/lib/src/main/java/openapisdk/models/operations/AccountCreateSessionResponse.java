package openapisdk.models.operations;



public class AccountCreateSessionResponse {
    public String contentType;
    public AccountCreateSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountCreateSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Session session;
    public AccountCreateSessionResponse withSession(openapisdk.models.shared.Session session) {
        this.session = session;
        return this;
    }
}