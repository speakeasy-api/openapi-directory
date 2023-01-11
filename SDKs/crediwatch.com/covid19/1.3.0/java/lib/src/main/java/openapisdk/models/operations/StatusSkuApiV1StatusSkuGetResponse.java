package openapisdk.models.operations;



public class StatusSkuApiV1StatusSkuGetResponse {
    public String contentType;
    public StatusSkuApiV1StatusSkuGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public StatusSkuApiV1StatusSkuGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.StatusCall statusCall;
    public StatusSkuApiV1StatusSkuGetResponse withStatusCall(openapisdk.models.shared.StatusCall statusCall) {
        this.statusCall = statusCall;
        return this;
    }
    public Long statusCode;
    public StatusSkuApiV1StatusSkuGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}