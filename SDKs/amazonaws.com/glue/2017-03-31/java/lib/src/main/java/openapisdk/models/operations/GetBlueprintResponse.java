package openapisdk.models.operations;



public class GetBlueprintResponse {
    public String contentType;
    public GetBlueprintResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetBlueprintResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetBlueprintResponse getBlueprintResponse;
    public GetBlueprintResponse withGetBlueprintResponse(openapisdk.models.shared.GetBlueprintResponse getBlueprintResponse) {
        this.getBlueprintResponse = getBlueprintResponse;
        return this;
    }
    public Object internalServiceException;
    public GetBlueprintResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetBlueprintResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetBlueprintResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetBlueprintResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}