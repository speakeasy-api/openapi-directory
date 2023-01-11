package openapisdk.models.operations;



public class CreateContainerRecipeResponse {
    public Object callRateLimitExceededException;
    public CreateContainerRecipeResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public CreateContainerRecipeResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateContainerRecipeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateContainerRecipeResponse createContainerRecipeResponse;
    public CreateContainerRecipeResponse withCreateContainerRecipeResponse(openapisdk.models.shared.CreateContainerRecipeResponse createContainerRecipeResponse) {
        this.createContainerRecipeResponse = createContainerRecipeResponse;
        return this;
    }
    public Object forbiddenException;
    public CreateContainerRecipeResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateContainerRecipeResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidRequestException;
    public CreateContainerRecipeResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidVersionNumberException;
    public CreateContainerRecipeResponse withInvalidVersionNumberException(Object invalidVersionNumberException) {
        this.invalidVersionNumberException = invalidVersionNumberException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateContainerRecipeResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreateContainerRecipeResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceException;
    public CreateContainerRecipeResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateContainerRecipeResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateContainerRecipeResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateContainerRecipeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}