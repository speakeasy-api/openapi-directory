package openapisdk.models.operations;



public class CreatePipelineResponse {
    public Object accessDeniedException;
    public CreatePipelineResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreatePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePipelineResponse createPipelineResponse;
    public CreatePipelineResponse withCreatePipelineResponse(openapisdk.models.shared.CreatePipelineResponse createPipelineResponse) {
        this.createPipelineResponse = createPipelineResponse;
        return this;
    }
    public Object incompatibleVersionException;
    public CreatePipelineResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public CreatePipelineResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object limitExceededException;
    public CreatePipelineResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreatePipelineResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreatePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreatePipelineResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}