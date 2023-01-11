package openapisdk.models.operations;



public class CreateContainerServiceResponse {
    public Object accessDeniedException;
    public CreateContainerServiceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateContainerServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateContainerServiceResult createContainerServiceResult;
    public CreateContainerServiceResponse withCreateContainerServiceResult(openapisdk.models.shared.CreateContainerServiceResult createContainerServiceResult) {
        this.createContainerServiceResult = createContainerServiceResult;
        return this;
    }
    public Object invalidInputException;
    public CreateContainerServiceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CreateContainerServiceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public CreateContainerServiceResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateContainerServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateContainerServiceResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}