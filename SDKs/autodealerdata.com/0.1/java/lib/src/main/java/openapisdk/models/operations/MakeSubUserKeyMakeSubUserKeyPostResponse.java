package openapisdk.models.operations;



public class MakeSubUserKeyMakeSubUserKeyPostResponse {
    public String contentType;
    public MakeSubUserKeyMakeSubUserKeyPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public MakeSubUserKeyMakeSubUserKeyPostResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public MakeSubUserKeyMakeSubUserKeyPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubUserJsonWebToken subUserJSONWebToken;
    public MakeSubUserKeyMakeSubUserKeyPostResponse withSubUserJsonWebToken(openapisdk.models.shared.SubUserJsonWebToken subUserJSONWebToken) {
        this.subUserJSONWebToken = subUserJSONWebToken;
        return this;
    }
}