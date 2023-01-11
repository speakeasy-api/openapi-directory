package openapisdk.models.operations;



public class DeleteBlueprintResponse {
    public String contentType;
    public DeleteBlueprintResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBlueprintResponse deleteBlueprintResponse;
    public DeleteBlueprintResponse withDeleteBlueprintResponse(openapisdk.models.shared.DeleteBlueprintResponse deleteBlueprintResponse) {
        this.deleteBlueprintResponse = deleteBlueprintResponse;
        return this;
    }
    public Object internalServiceException;
    public DeleteBlueprintResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteBlueprintResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteBlueprintResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteBlueprintResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}