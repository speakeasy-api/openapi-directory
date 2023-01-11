package openapisdk.models.operations;



public class CancelMlTaskRunResponse {
    public openapisdk.models.shared.CancelMlTaskRunResponse cancelMLTaskRunResponse;
    public CancelMlTaskRunResponse withCancelMlTaskRunResponse(openapisdk.models.shared.CancelMlTaskRunResponse cancelMLTaskRunResponse) {
        this.cancelMLTaskRunResponse = cancelMLTaskRunResponse;
        return this;
    }
    public String contentType;
    public CancelMlTaskRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public CancelMlTaskRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public CancelMlTaskRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CancelMlTaskRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CancelMlTaskRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public CancelMlTaskRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}