package openapisdk.models.operations;



public class GetBlueprintRunResponse {
    public String contentType;
    public GetBlueprintRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetBlueprintRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetBlueprintRunResponse getBlueprintRunResponse;
    public GetBlueprintRunResponse withGetBlueprintRunResponse(openapisdk.models.shared.GetBlueprintRunResponse getBlueprintRunResponse) {
        this.getBlueprintRunResponse = getBlueprintRunResponse;
        return this;
    }
    public Object internalServiceException;
    public GetBlueprintRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object operationTimeoutException;
    public GetBlueprintRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetBlueprintRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}