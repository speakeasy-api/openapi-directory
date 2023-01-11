package openapisdk.models.operations;



public class PostLoginResponse {
    public String contentType;
    public PostLoginResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoginResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InvalidToken invalidToken;
    public PostLoginResponse withInvalidToken(openapisdk.models.shared.InvalidToken invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public openapisdk.models.shared.LoginResponse loginResponse;
    public PostLoginResponse withLoginResponse(openapisdk.models.shared.LoginResponse loginResponse) {
        this.loginResponse = loginResponse;
        return this;
    }
}