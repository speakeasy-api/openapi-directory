package openapisdk.models.operations;



public class GetBlueprintRunsResponse {
    public String contentType;
    public GetBlueprintRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetBlueprintRunsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetBlueprintRunsResponse getBlueprintRunsResponse;
    public GetBlueprintRunsResponse withGetBlueprintRunsResponse(openapisdk.models.shared.GetBlueprintRunsResponse getBlueprintRunsResponse) {
        this.getBlueprintRunsResponse = getBlueprintRunsResponse;
        return this;
    }
    public Object internalServiceException;
    public GetBlueprintRunsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetBlueprintRunsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetBlueprintRunsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetBlueprintRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}