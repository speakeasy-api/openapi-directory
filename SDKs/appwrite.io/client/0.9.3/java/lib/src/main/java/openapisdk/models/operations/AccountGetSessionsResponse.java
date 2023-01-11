package openapisdk.models.operations;



public class AccountGetSessionsResponse {
    public String contentType;
    public AccountGetSessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountGetSessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SessionList sessionList;
    public AccountGetSessionsResponse withSessionList(openapisdk.models.shared.SessionList sessionList) {
        this.sessionList = sessionList;
        return this;
    }
}