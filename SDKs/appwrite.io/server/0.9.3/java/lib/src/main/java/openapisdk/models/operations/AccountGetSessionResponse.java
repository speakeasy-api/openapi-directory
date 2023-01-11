package openapisdk.models.operations;



public class AccountGetSessionResponse {
    public String contentType;
    public AccountGetSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountGetSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Session session;
    public AccountGetSessionResponse withSession(openapisdk.models.shared.Session session) {
        this.session = session;
        return this;
    }
}