package openapisdk.models.operations;



public class DeleteStreamProcessorResponse {
    public Object accessDeniedException;
    public DeleteStreamProcessorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteStreamProcessorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteStreamProcessorResponse;
    public DeleteStreamProcessorResponse withDeleteStreamProcessorResponse(java.util.Map<String, Object> deleteStreamProcessorResponse) {
        this.deleteStreamProcessorResponse = deleteStreamProcessorResponse;
        return this;
    }
    public Object internalServerError;
    public DeleteStreamProcessorResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidParameterException;
    public DeleteStreamProcessorResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public DeleteStreamProcessorResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteStreamProcessorResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteStreamProcessorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteStreamProcessorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteStreamProcessorResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}