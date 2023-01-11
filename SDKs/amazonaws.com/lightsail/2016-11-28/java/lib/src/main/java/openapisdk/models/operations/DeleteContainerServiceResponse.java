package openapisdk.models.operations;



public class DeleteContainerServiceResponse {
    public Object accessDeniedException;
    public DeleteContainerServiceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteContainerServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteContainerServiceResult;
    public DeleteContainerServiceResponse withDeleteContainerServiceResult(java.util.Map<String, Object> deleteContainerServiceResult) {
        this.deleteContainerServiceResult = deleteContainerServiceResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteContainerServiceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteContainerServiceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public DeleteContainerServiceResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteContainerServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteContainerServiceResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}