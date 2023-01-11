package openapisdk.models.operations;



public class DeleteUserUserIdResponse {
    public String contentType;
    public DeleteUserUserIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteUserUserIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InvalidToken invalidToken;
    public DeleteUserUserIdResponse withInvalidToken(openapisdk.models.shared.InvalidToken invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
}