package openapisdk.models.operations;



public class PutSigninSigninIdResponse {
    public String contentType;
    public PutSigninSigninIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutSigninSigninIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InvalidToken invalidToken;
    public PutSigninSigninIdResponse withInvalidToken(openapisdk.models.shared.InvalidToken invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public openapisdk.models.shared.UserRecord userRecord;
    public PutSigninSigninIdResponse withUserRecord(openapisdk.models.shared.UserRecord userRecord) {
        this.userRecord = userRecord;
        return this;
    }
}