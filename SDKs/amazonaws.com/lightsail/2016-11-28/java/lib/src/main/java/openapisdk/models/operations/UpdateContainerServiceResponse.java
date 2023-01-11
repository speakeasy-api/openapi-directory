package openapisdk.models.operations;



public class UpdateContainerServiceResponse {
    public Object accessDeniedException;
    public UpdateContainerServiceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateContainerServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UpdateContainerServiceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public UpdateContainerServiceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public UpdateContainerServiceResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateContainerServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public UpdateContainerServiceResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
    public openapisdk.models.shared.UpdateContainerServiceResult updateContainerServiceResult;
    public UpdateContainerServiceResponse withUpdateContainerServiceResult(openapisdk.models.shared.UpdateContainerServiceResult updateContainerServiceResult) {
        this.updateContainerServiceResult = updateContainerServiceResult;
        return this;
    }
}