package openapisdk.models.operations;



public class CreateContainerServiceDeploymentResponse {
    public Object accessDeniedException;
    public CreateContainerServiceDeploymentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateContainerServiceDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateContainerServiceDeploymentResult createContainerServiceDeploymentResult;
    public CreateContainerServiceDeploymentResponse withCreateContainerServiceDeploymentResult(openapisdk.models.shared.CreateContainerServiceDeploymentResult createContainerServiceDeploymentResult) {
        this.createContainerServiceDeploymentResult = createContainerServiceDeploymentResult;
        return this;
    }
    public Object invalidInputException;
    public CreateContainerServiceDeploymentResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CreateContainerServiceDeploymentResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public CreateContainerServiceDeploymentResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateContainerServiceDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateContainerServiceDeploymentResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}