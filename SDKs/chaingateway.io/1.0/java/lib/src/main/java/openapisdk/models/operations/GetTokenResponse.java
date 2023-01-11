package openapisdk.models.operations;



public class GetTokenResponse {
    public String contentType;
    public GetTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetToken getToken;
    public GetTokenResponse withGetToken(openapisdk.models.shared.GetToken getToken) {
        this.getToken = getToken;
        return this;
    }
}