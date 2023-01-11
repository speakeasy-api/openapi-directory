package openapisdk.models.operations;



public class MakeTokenGetTokenPostResponse {
    public String contentType;
    public MakeTokenGetTokenPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public MakeTokenGetTokenPostResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.JsonWebToken jsonWebToken;
    public MakeTokenGetTokenPostResponse withJsonWebToken(openapisdk.models.shared.JsonWebToken jsonWebToken) {
        this.jsonWebToken = jsonWebToken;
        return this;
    }
    public Long statusCode;
    public MakeTokenGetTokenPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}