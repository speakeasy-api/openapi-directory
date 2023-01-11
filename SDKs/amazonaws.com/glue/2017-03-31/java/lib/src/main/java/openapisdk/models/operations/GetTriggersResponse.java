package openapisdk.models.operations;



public class GetTriggersResponse {
    public String contentType;
    public GetTriggersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetTriggersResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetTriggersResponse getTriggersResponse;
    public GetTriggersResponse withGetTriggersResponse(openapisdk.models.shared.GetTriggersResponse getTriggersResponse) {
        this.getTriggersResponse = getTriggersResponse;
        return this;
    }
    public Object internalServiceException;
    public GetTriggersResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetTriggersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetTriggersResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetTriggersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}