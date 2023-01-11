package openapisdk.models.operations;



public class GetSigninSigninIdResponse {
    public String contentType;
    public GetSigninSigninIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSigninSigninIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InvalidToken invalidToken;
    public GetSigninSigninIdResponse withInvalidToken(openapisdk.models.shared.InvalidToken invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public openapisdk.models.shared.Signin signin;
    public GetSigninSigninIdResponse withSignin(openapisdk.models.shared.Signin signin) {
        this.signin = signin;
        return this;
    }
}