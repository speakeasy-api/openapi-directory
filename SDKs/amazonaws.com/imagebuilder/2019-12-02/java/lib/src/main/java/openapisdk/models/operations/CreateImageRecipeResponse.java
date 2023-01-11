package openapisdk.models.operations;



public class CreateImageRecipeResponse {
    public Object callRateLimitExceededException;
    public CreateImageRecipeResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public CreateImageRecipeResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateImageRecipeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateImageRecipeResponse createImageRecipeResponse;
    public CreateImageRecipeResponse withCreateImageRecipeResponse(openapisdk.models.shared.CreateImageRecipeResponse createImageRecipeResponse) {
        this.createImageRecipeResponse = createImageRecipeResponse;
        return this;
    }
    public Object forbiddenException;
    public CreateImageRecipeResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateImageRecipeResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidRequestException;
    public CreateImageRecipeResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidVersionNumberException;
    public CreateImageRecipeResponse withInvalidVersionNumberException(Object invalidVersionNumberException) {
        this.invalidVersionNumberException = invalidVersionNumberException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateImageRecipeResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreateImageRecipeResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceException;
    public CreateImageRecipeResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateImageRecipeResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateImageRecipeResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateImageRecipeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}