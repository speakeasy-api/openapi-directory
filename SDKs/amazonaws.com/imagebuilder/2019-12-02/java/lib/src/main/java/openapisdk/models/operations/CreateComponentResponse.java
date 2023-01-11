package openapisdk.models.operations;



public class CreateComponentResponse {
    public Object callRateLimitExceededException;
    public CreateComponentResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public CreateComponentResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateComponentResponse createComponentResponse;
    public CreateComponentResponse withCreateComponentResponse(openapisdk.models.shared.CreateComponentResponse createComponentResponse) {
        this.createComponentResponse = createComponentResponse;
        return this;
    }
    public Object forbiddenException;
    public CreateComponentResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateComponentResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidParameterCombinationException;
    public CreateComponentResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidRequestException;
    public CreateComponentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidVersionNumberException;
    public CreateComponentResponse withInvalidVersionNumberException(Object invalidVersionNumberException) {
        this.invalidVersionNumberException = invalidVersionNumberException;
        return this;
    }
    public Object resourceInUseException;
    public CreateComponentResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceException;
    public CreateComponentResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateComponentResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateComponentResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}