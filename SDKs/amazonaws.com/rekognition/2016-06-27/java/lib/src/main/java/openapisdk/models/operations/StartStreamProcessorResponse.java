package openapisdk.models.operations;



public class StartStreamProcessorResponse {
    public Object accessDeniedException;
    public StartStreamProcessorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public StartStreamProcessorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public StartStreamProcessorResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidParameterException;
    public StartStreamProcessorResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public StartStreamProcessorResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceInUseException;
    public StartStreamProcessorResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartStreamProcessorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> startStreamProcessorResponse;
    public StartStreamProcessorResponse withStartStreamProcessorResponse(java.util.Map<String, Object> startStreamProcessorResponse) {
        this.startStreamProcessorResponse = startStreamProcessorResponse;
        return this;
    }
    public Long statusCode;
    public StartStreamProcessorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartStreamProcessorResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}