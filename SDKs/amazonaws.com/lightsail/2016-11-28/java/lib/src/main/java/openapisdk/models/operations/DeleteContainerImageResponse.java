package openapisdk.models.operations;



public class DeleteContainerImageResponse {
    public Object accessDeniedException;
    public DeleteContainerImageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteContainerImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteContainerImageResult;
    public DeleteContainerImageResponse withDeleteContainerImageResult(java.util.Map<String, Object> deleteContainerImageResult) {
        this.deleteContainerImageResult = deleteContainerImageResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteContainerImageResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteContainerImageResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public DeleteContainerImageResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteContainerImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteContainerImageResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}