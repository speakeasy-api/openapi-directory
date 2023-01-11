package openapisdk.models.operations;



public class CreateCustomMetricResponse {
    public String contentType;
    public CreateCustomMetricResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCustomMetricResponse createCustomMetricResponse;
    public CreateCustomMetricResponse withCreateCustomMetricResponse(openapisdk.models.shared.CreateCustomMetricResponse createCustomMetricResponse) {
        this.createCustomMetricResponse = createCustomMetricResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateCustomMetricResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateCustomMetricResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateCustomMetricResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateCustomMetricResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateCustomMetricResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateCustomMetricResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}