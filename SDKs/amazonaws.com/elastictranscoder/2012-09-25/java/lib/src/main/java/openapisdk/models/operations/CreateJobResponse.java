package openapisdk.models.operations;



public class CreateJobResponse {
    public Object accessDeniedException;
    public CreateJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateJobResponse createJobResponse;
    public CreateJobResponse withCreateJobResponse(openapisdk.models.shared.CreateJobResponse createJobResponse) {
        this.createJobResponse = createJobResponse;
        return this;
    }
    public Object incompatibleVersionException;
    public CreateJobResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public CreateJobResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object limitExceededException;
    public CreateJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}