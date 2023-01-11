package openapisdk.models.operations;



public class StatusCallApiV1StatusCallGetResponse {
    public String contentType;
    public StatusCallApiV1StatusCallGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public StatusCallApiV1StatusCallGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.StatusCall statusCall;
    public StatusCallApiV1StatusCallGetResponse withStatusCall(openapisdk.models.shared.StatusCall statusCall) {
        this.statusCall = statusCall;
        return this;
    }
    public Long statusCode;
    public StatusCallApiV1StatusCallGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}