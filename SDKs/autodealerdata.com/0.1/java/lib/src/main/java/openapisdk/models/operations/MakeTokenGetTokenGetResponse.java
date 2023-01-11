package openapisdk.models.operations;



public class MakeTokenGetTokenGetResponse {
    public String contentType;
    public MakeTokenGetTokenGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public MakeTokenGetTokenGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.JsonWebToken jsonWebToken;
    public MakeTokenGetTokenGetResponse withJsonWebToken(openapisdk.models.shared.JsonWebToken jsonWebToken) {
        this.jsonWebToken = jsonWebToken;
        return this;
    }
    public Long statusCode;
    public MakeTokenGetTokenGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}