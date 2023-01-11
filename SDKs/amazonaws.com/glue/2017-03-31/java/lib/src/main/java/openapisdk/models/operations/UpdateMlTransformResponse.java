package openapisdk.models.operations;



public class UpdateMlTransformResponse {
    public Object accessDeniedException;
    public UpdateMlTransformResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateMlTransformResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateMlTransformResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public UpdateMlTransformResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public UpdateMlTransformResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public UpdateMlTransformResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public UpdateMlTransformResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateMlTransformResponse updateMLTransformResponse;
    public UpdateMlTransformResponse withUpdateMlTransformResponse(openapisdk.models.shared.UpdateMlTransformResponse updateMLTransformResponse) {
        this.updateMLTransformResponse = updateMLTransformResponse;
        return this;
    }
}