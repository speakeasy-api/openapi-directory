package openapisdk.models.operations;



public class GetMlTransformResponse {
    public String contentType;
    public GetMlTransformResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetMlTransformResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetMlTransformResponse getMLTransformResponse;
    public GetMlTransformResponse withGetMlTransformResponse(openapisdk.models.shared.GetMlTransformResponse getMLTransformResponse) {
        this.getMLTransformResponse = getMLTransformResponse;
        return this;
    }
    public Object internalServiceException;
    public GetMlTransformResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetMlTransformResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetMlTransformResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetMlTransformResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}