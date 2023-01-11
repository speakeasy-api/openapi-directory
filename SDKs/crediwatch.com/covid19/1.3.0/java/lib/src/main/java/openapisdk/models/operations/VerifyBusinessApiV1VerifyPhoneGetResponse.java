package openapisdk.models.operations;



public class VerifyBusinessApiV1VerifyPhoneGetResponse {
    public String contentType;
    public VerifyBusinessApiV1VerifyPhoneGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public VerifyBusinessApiV1VerifyPhoneGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public VerifyBusinessApiV1VerifyPhoneGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyPhone verifyPhone;
    public VerifyBusinessApiV1VerifyPhoneGetResponse withVerifyPhone(openapisdk.models.shared.VerifyPhone verifyPhone) {
        this.verifyPhone = verifyPhone;
        return this;
    }
}