package openapisdk.models.operations;



public class GetEffectivePermissionsForPathResponse {
    public String contentType;
    public GetEffectivePermissionsForPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetEffectivePermissionsForPathResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetEffectivePermissionsForPathResponse getEffectivePermissionsForPathResponse;
    public GetEffectivePermissionsForPathResponse withGetEffectivePermissionsForPathResponse(openapisdk.models.shared.GetEffectivePermissionsForPathResponse getEffectivePermissionsForPathResponse) {
        this.getEffectivePermissionsForPathResponse = getEffectivePermissionsForPathResponse;
        return this;
    }
    public Object internalServiceException;
    public GetEffectivePermissionsForPathResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetEffectivePermissionsForPathResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetEffectivePermissionsForPathResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetEffectivePermissionsForPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}