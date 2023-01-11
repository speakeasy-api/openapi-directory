package openapisdk.models.operations;



public class GetSigninsResponse {
    public String contentType;
    public GetSigninsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSigninsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InvalidToken invalidToken;
    public GetSigninsResponse withInvalidToken(openapisdk.models.shared.InvalidToken invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public openapisdk.models.shared.KeyFailure keyFailure;
    public GetSigninsResponse withKeyFailure(openapisdk.models.shared.KeyFailure keyFailure) {
        this.keyFailure = keyFailure;
        return this;
    }
    public openapisdk.models.shared.Signin[] signins;
    public GetSigninsResponse withSignins(openapisdk.models.shared.Signin[] signins) {
        this.signins = signins;
        return this;
    }
}