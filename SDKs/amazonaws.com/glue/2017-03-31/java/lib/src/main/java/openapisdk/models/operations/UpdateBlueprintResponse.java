package openapisdk.models.operations;



public class UpdateBlueprintResponse {
    public Object concurrentModificationException;
    public UpdateBlueprintResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateBlueprintResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateBlueprintResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object illegalBlueprintStateException;
    public UpdateBlueprintResponse withIllegalBlueprintStateException(Object illegalBlueprintStateException) {
        this.illegalBlueprintStateException = illegalBlueprintStateException;
        return this;
    }
    public Object internalServiceException;
    public UpdateBlueprintResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public UpdateBlueprintResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public UpdateBlueprintResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public UpdateBlueprintResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateBlueprintResponse updateBlueprintResponse;
    public UpdateBlueprintResponse withUpdateBlueprintResponse(openapisdk.models.shared.UpdateBlueprintResponse updateBlueprintResponse) {
        this.updateBlueprintResponse = updateBlueprintResponse;
        return this;
    }
}