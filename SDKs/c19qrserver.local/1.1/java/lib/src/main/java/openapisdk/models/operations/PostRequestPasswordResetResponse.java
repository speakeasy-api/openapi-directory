package openapisdk.models.operations;



public class PostRequestPasswordResetResponse {
    public String contentType;
    public PostRequestPasswordResetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRequestPasswordResetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InvalidToken invalidToken;
    public PostRequestPasswordResetResponse withInvalidToken(openapisdk.models.shared.InvalidToken invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public openapisdk.models.shared.RequestPasswordResetResponse requestPasswordResetResponse;
    public PostRequestPasswordResetResponse withRequestPasswordResetResponse(openapisdk.models.shared.RequestPasswordResetResponse requestPasswordResetResponse) {
        this.requestPasswordResetResponse = requestPasswordResetResponse;
        return this;
    }
}