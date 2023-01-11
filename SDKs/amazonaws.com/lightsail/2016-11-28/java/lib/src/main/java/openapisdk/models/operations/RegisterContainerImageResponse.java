package openapisdk.models.operations;



public class RegisterContainerImageResponse {
    public Object accessDeniedException;
    public RegisterContainerImageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public RegisterContainerImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public RegisterContainerImageResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public RegisterContainerImageResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.RegisterContainerImageResult registerContainerImageResult;
    public RegisterContainerImageResponse withRegisterContainerImageResult(openapisdk.models.shared.RegisterContainerImageResult registerContainerImageResult) {
        this.registerContainerImageResult = registerContainerImageResult;
        return this;
    }
    public Object serviceException;
    public RegisterContainerImageResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public RegisterContainerImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public RegisterContainerImageResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}