package openapisdk.models.operations;



public class CreateApplicationResponse {
    public String contentType;
    public CreateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateApplicationResponse createApplicationResponse;
    public CreateApplicationResponse withCreateApplicationResponse(openapisdk.models.shared.CreateApplicationResponse createApplicationResponse) {
        this.createApplicationResponse = createApplicationResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateApplicationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateApplicationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateApplicationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateApplicationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}