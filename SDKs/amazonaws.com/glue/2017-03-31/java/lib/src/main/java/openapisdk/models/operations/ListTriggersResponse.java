package openapisdk.models.operations;



public class ListTriggersResponse {
    public String contentType;
    public ListTriggersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public ListTriggersResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public ListTriggersResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ListTriggersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListTriggersResponse listTriggersResponse;
    public ListTriggersResponse withListTriggersResponse(openapisdk.models.shared.ListTriggersResponse listTriggersResponse) {
        this.listTriggersResponse = listTriggersResponse;
        return this;
    }
    public Object operationTimeoutException;
    public ListTriggersResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public ListTriggersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}