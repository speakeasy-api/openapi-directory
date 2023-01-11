package openapisdk.models.operations;



public class VerifyNameApiV1VerifyNameGetResponse {
    public String contentType;
    public VerifyNameApiV1VerifyNameGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public VerifyNameApiV1VerifyNameGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public VerifyNameApiV1VerifyNameGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyName verifyName;
    public VerifyNameApiV1VerifyNameGetResponse withVerifyName(openapisdk.models.shared.VerifyName verifyName) {
        this.verifyName = verifyName;
        return this;
    }
}