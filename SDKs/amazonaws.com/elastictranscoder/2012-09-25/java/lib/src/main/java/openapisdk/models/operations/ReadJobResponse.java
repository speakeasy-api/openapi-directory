package openapisdk.models.operations;



public class ReadJobResponse {
    public Object accessDeniedException;
    public ReadJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ReadJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleVersionException;
    public ReadJobResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public ReadJobResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ReadJobResponse readJobResponse;
    public ReadJobResponse withReadJobResponse(openapisdk.models.shared.ReadJobResponse readJobResponse) {
        this.readJobResponse = readJobResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ReadJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ReadJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ReadJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}