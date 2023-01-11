package openapisdk.models.operations;



public class RevokeSubUserKeyRevokeSubUserKeyPutResponse {
    public String contentType;
    public RevokeSubUserKeyRevokeSubUserKeyPutResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenericResponse genericResponse;
    public RevokeSubUserKeyRevokeSubUserKeyPutResponse withGenericResponse(openapisdk.models.shared.GenericResponse genericResponse) {
        this.genericResponse = genericResponse;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public RevokeSubUserKeyRevokeSubUserKeyPutResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public RevokeSubUserKeyRevokeSubUserKeyPutResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}