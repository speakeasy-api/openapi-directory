package openapisdk.models.operations;



public class RequestAccessTokenResponse {
    public byte[] body;
    public RequestAccessTokenResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RequestAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public RequestAccessTokenResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public RequestAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TokenDetails tokenDetails;
    public RequestAccessTokenResponse withTokenDetails(openapisdk.models.shared.TokenDetails tokenDetails) {
        this.tokenDetails = tokenDetails;
        return this;
    }
}