package openapisdk.models.operations;



public class GetMlTaskRunResponse {
    public String contentType;
    public GetMlTaskRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetMlTaskRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetMlTaskRunResponse getMLTaskRunResponse;
    public GetMlTaskRunResponse withGetMlTaskRunResponse(openapisdk.models.shared.GetMlTaskRunResponse getMLTaskRunResponse) {
        this.getMLTaskRunResponse = getMLTaskRunResponse;
        return this;
    }
    public Object internalServiceException;
    public GetMlTaskRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetMlTaskRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetMlTaskRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetMlTaskRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}