package openapisdk.models.operations;



public class CreateJobTemplateResponse {
    public Object conflictException;
    public CreateJobTemplateResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateJobTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateJobTemplateResponse createJobTemplateResponse;
    public CreateJobTemplateResponse withCreateJobTemplateResponse(openapisdk.models.shared.CreateJobTemplateResponse createJobTemplateResponse) {
        this.createJobTemplateResponse = createJobTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateJobTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateJobTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateJobTemplateResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateJobTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateJobTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateJobTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}