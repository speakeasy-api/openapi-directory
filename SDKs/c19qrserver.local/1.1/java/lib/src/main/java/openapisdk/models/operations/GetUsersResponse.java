package openapisdk.models.operations;



public class GetUsersResponse {
    public String contentType;
    public GetUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InvalidToken invalidToken;
    public GetUsersResponse withInvalidToken(openapisdk.models.shared.InvalidToken invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public openapisdk.models.shared.UserRecord[] userRecords;
    public GetUsersResponse withUserRecords(openapisdk.models.shared.UserRecord[] userRecords) {
        this.userRecords = userRecords;
        return this;
    }
}