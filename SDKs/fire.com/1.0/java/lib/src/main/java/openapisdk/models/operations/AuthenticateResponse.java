package openapisdk.models.operations;



public class AuthenticateResponse {
    public AuthenticateAccessToken accessToken;
    public AuthenticateResponse withAccessToken(AuthenticateAccessToken accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    public String contentType;
    public AuthenticateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthenticateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}