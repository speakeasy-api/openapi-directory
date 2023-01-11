package openapisdk.models.operations;



public class VerifySkuApiV1VerifySkuGetResponse {
    public String contentType;
    public VerifySkuApiV1VerifySkuGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public VerifySkuApiV1VerifySkuGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public VerifySkuApiV1VerifySkuGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyPhone verifyPhone;
    public VerifySkuApiV1VerifySkuGetResponse withVerifyPhone(openapisdk.models.shared.VerifyPhone verifyPhone) {
        this.verifyPhone = verifyPhone;
        return this;
    }
}