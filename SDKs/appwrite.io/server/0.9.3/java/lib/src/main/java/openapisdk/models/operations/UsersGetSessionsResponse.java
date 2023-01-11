package openapisdk.models.operations;



public class UsersGetSessionsResponse {
    public String contentType;
    public UsersGetSessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersGetSessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SessionList sessionList;
    public UsersGetSessionsResponse withSessionList(openapisdk.models.shared.SessionList sessionList) {
        this.sessionList = sessionList;
        return this;
    }
}