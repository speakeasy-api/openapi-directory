package openapisdk.models.operations;



public class RestoreServerResponse {
    public String contentType;
    public RestoreServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidStateException;
    public RestoreServerResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public RestoreServerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RestoreServerResponse restoreServerResponse;
    public RestoreServerResponse withRestoreServerResponse(openapisdk.models.shared.RestoreServerResponse restoreServerResponse) {
        this.restoreServerResponse = restoreServerResponse;
        return this;
    }
    public Long statusCode;
    public RestoreServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RestoreServerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}