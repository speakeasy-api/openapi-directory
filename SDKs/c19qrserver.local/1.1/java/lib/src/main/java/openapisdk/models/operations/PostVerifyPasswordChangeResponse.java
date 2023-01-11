package openapisdk.models.operations;



public class PostVerifyPasswordChangeResponse {
    public String contentType;
    public PostVerifyPasswordChangeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostVerifyPasswordChangeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InvalidToken invalidToken;
    public PostVerifyPasswordChangeResponse withInvalidToken(openapisdk.models.shared.InvalidToken invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
}