package openapisdk.models.operations;



public class GetUserUserIdResponse {
    public String contentType;
    public GetUserUserIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserUserIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InvalidToken invalidToken;
    public GetUserUserIdResponse withInvalidToken(openapisdk.models.shared.InvalidToken invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public openapisdk.models.shared.UserRecord userRecord;
    public GetUserUserIdResponse withUserRecord(openapisdk.models.shared.UserRecord userRecord) {
        this.userRecord = userRecord;
        return this;
    }
}