package openapisdk.models.operations;



public class PostSigninResponse {
    public String contentType;
    public PostSigninResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSigninResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InvalidToken invalidToken;
    public PostSigninResponse withInvalidToken(openapisdk.models.shared.InvalidToken invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public openapisdk.models.shared.KeyFailure keyFailure;
    public PostSigninResponse withKeyFailure(openapisdk.models.shared.KeyFailure keyFailure) {
        this.keyFailure = keyFailure;
        return this;
    }
    public openapisdk.models.shared.SigninResponse signinResponse;
    public PostSigninResponse withSigninResponse(openapisdk.models.shared.SigninResponse signinResponse) {
        this.signinResponse = signinResponse;
        return this;
    }
}