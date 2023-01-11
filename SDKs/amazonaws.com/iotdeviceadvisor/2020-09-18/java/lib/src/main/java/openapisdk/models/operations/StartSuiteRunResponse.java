package openapisdk.models.operations;



public class StartSuiteRunResponse {
    public Object conflictException;
    public StartSuiteRunResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartSuiteRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartSuiteRunResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.StartSuiteRunResponse startSuiteRunResponse;
    public StartSuiteRunResponse withStartSuiteRunResponse(openapisdk.models.shared.StartSuiteRunResponse startSuiteRunResponse) {
        this.startSuiteRunResponse = startSuiteRunResponse;
        return this;
    }
    public Long statusCode;
    public StartSuiteRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public StartSuiteRunResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}