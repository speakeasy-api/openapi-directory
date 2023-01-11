package openapisdk.models.operations;



public class DeleteLfTagResponse {
    public Object accessDeniedException;
    public DeleteLfTagResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteLfTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteLFTagResponse;
    public DeleteLfTagResponse withDeleteLfTagResponse(java.util.Map<String, Object> deleteLFTagResponse) {
        this.deleteLFTagResponse = deleteLFTagResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteLfTagResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DeleteLfTagResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteLfTagResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteLfTagResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteLfTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}