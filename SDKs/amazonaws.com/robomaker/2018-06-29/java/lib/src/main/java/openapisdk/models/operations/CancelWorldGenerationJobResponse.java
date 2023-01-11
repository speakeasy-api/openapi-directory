package openapisdk.models.operations;



public class CancelWorldGenerationJobResponse {
    public java.util.Map<String, Object> cancelWorldGenerationJobResponse;
    public CancelWorldGenerationJobResponse withCancelWorldGenerationJobResponse(java.util.Map<String, Object> cancelWorldGenerationJobResponse) {
        this.cancelWorldGenerationJobResponse = cancelWorldGenerationJobResponse;
        return this;
    }
    public String contentType;
    public CancelWorldGenerationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CancelWorldGenerationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public CancelWorldGenerationJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelWorldGenerationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelWorldGenerationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelWorldGenerationJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}