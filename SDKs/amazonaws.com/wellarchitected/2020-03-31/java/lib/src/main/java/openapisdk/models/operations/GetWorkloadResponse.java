package openapisdk.models.operations;



public class GetWorkloadResponse {
    public Object accessDeniedException;
    public GetWorkloadResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetWorkloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetWorkloadOutput getWorkloadOutput;
    public GetWorkloadResponse withGetWorkloadOutput(openapisdk.models.shared.GetWorkloadOutput getWorkloadOutput) {
        this.getWorkloadOutput = getWorkloadOutput;
        return this;
    }
    public Object internalServerException;
    public GetWorkloadResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetWorkloadResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetWorkloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetWorkloadResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetWorkloadResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}