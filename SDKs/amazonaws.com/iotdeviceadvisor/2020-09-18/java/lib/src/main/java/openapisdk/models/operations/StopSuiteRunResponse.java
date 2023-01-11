package openapisdk.models.operations;



public class StopSuiteRunResponse {
    public String contentType;
    public StopSuiteRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopSuiteRunResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopSuiteRunResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopSuiteRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopSuiteRunResponse;
    public StopSuiteRunResponse withStopSuiteRunResponse(java.util.Map<String, Object> stopSuiteRunResponse) {
        this.stopSuiteRunResponse = stopSuiteRunResponse;
        return this;
    }
    public Object validationException;
    public StopSuiteRunResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}