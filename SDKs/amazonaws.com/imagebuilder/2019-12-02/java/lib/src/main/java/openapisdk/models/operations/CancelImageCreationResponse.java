package openapisdk.models.operations;



public class CancelImageCreationResponse {
    public Object callRateLimitExceededException;
    public CancelImageCreationResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public openapisdk.models.shared.CancelImageCreationResponse cancelImageCreationResponse;
    public CancelImageCreationResponse withCancelImageCreationResponse(openapisdk.models.shared.CancelImageCreationResponse cancelImageCreationResponse) {
        this.cancelImageCreationResponse = cancelImageCreationResponse;
        return this;
    }
    public Object clientException;
    public CancelImageCreationResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CancelImageCreationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public CancelImageCreationResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CancelImageCreationResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidRequestException;
    public CancelImageCreationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public CancelImageCreationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceException;
    public CancelImageCreationResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public CancelImageCreationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CancelImageCreationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}