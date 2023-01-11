package openapisdk.models.operations;



public class DeleteMlTransformResponse {
    public String contentType;
    public DeleteMlTransformResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteMlTransformResponse deleteMLTransformResponse;
    public DeleteMlTransformResponse withDeleteMlTransformResponse(openapisdk.models.shared.DeleteMlTransformResponse deleteMLTransformResponse) {
        this.deleteMLTransformResponse = deleteMLTransformResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteMlTransformResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DeleteMlTransformResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteMlTransformResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteMlTransformResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteMlTransformResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}